import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid, IconButton, Typography, debounce } from '@mui/material';
import { searchTracks } from '../../features/API/searchTracks';
import { SearchOutlined } from '@mui/icons-material';

interface SearchBarGenericProps<Type> {
  // these three will replaced by resources from useQuery
  // setOptions will no longer exist anymore, because calling a query will set the state also
  options: readonly Type[];
  setOptions: React.Dispatch<React.SetStateAction<readonly Type[]>>;
  search: (name: string) => Promise<Type[]>;

  value: Type[];
  setValue: React.Dispatch<React.SetStateAction<Type[]>>;
  name: string;
  barLabel: string;
  renderOption: (props: React.HTMLAttributes<HTMLElement>, option: any) => React.ReactElement;
}

const SearchBarGeneric = <T extends unknown & {id : string, name: string}>({
  options,
  setOptions,
  value,
  setValue,
  search,
  name,
  barLabel,
  renderOption,
}: SearchBarGenericProps<T>) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const loading = (inputValue && open && options.length) === 0;

  

  const fetchAndSet = async (
    input: string,
    // callback: (results?: readonly any[]) => void,
  ) => {
    const results: T[] = await search(input) // change later
    // console.log(results)
    setOptions(results);
  }

  const fetchItems = React.useMemo(() =>
      debounce(
        (
          request: { input: string },
          // callback: (results?: readonly any[]) => void, TODO: any reason why they pass call back here
        ) => {
          fetchAndSet(
            request.input,
          );
        },
        1000,
      ),
    [],
  );
  
  React.useEffect(() => {
    if (!loading) {
      return undefined;
    }
    if (inputValue.trim() === '') {
     setOptions([])
      return undefined;
    }

    fetchItems({ input: inputValue });

    

  }, [value, inputValue, fetchItems]);

  return (
    <Box display={"grid"} gridTemplateColumns="1fr 50px" alignItems={"center"}>
        <Autocomplete
      multiple
          autoHighlight
      sx={{marginBlock: 2}}
      clearOnBlur={false}
      id={name}
      open={open}
      value={value}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      filterOptions={(x) => x}
      isOptionEqualToValue={(option, value) => { console.log(option, value); return option.id === value.id;  }}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.name
      }
      onChange={
        (event, newValue: any, reason: string) => {
          if (event.type !== "keydown") {
            // this handler 
            setValue(newValue);
            setOptions([]); 
          }
      }
      }
      onInputChange={(event, newInputValue: string, reason: string) => {
        if (event.type !== "blur" && reason !== "reset" && newInputValue.trim() !== inputValue) {
          setInputValue(newInputValue);
        }
      }}
      loading={loading}
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={barLabel}
        
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={renderOption}
      />
      <Box>
        <IconButton onClick={() => fetchAndSet(inputValue)}>
        <SearchOutlined />
      </IconButton>
      </Box>
    </Box>
  );
}

export default SearchBarGeneric;