import React, { SyntheticEvent } from 'react'
import { Alert, Autocomplete, AutocompleteChangeReason, Box, Typography } from '@mui/material'
import { useState } from 'react';
import SearchTextArea from '../../components/SearchBar/SearchTextArea';
import genreOptions from "../../data/genres.json"
import { useDispatch } from 'react-redux';
import { seedGenresUpdated } from '../../features/slices/requiredSearchParamsSlice';

interface IGenreSearch {
  artists: string[];
  error: string;
}

const GenreSearch = ({ artists, error }: IGenreSearch) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch()

  const handleChange = (event: SyntheticEvent<Element, Event>, value: (string)[]) => {
    if (event.type !== "keydown") {
      setValue(value);
      dispatch(seedGenresUpdated(value));
    }
  }

  const handleInputChange = (event: React.SyntheticEvent<Element, Event>, newInputValue: string, reason: string) => {
    if (event.type !== "blur" && reason !== "reset" && newInputValue.trim() !== inputValue) {
      setInputValue(newInputValue)
      
    }
  }

  return (
    <Box>
      {error && <Alert severity="error">{ error }</Alert>}
      <Autocomplete<string, true, false, true>
        multiple
        autoHighlight
        sx={{marginBlock: 2}}
        clearOnBlur={false}
        id={"Genres"}
        open={open}
        value={value}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) =>option}
        onChange={handleChange}
        onInputChange={handleInputChange}
        loading={!genreOptions}
        options={genreOptions as string[]}
        renderOption={(props, option) => (
          <li {...props}>
            <Typography key={option}>{ option }</Typography>
          </li>)}
        renderInput={(params) => <SearchTextArea isError={error?true:false} params={params} label={"Genre"} loading={!genreOptions} />}
      />
    </Box>
  )
}

export default GenreSearch