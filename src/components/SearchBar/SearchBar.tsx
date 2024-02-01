import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import { ISearchResult } from '../../features/types/ISearchResult';
import SearchTextArea from './SearchTextArea';
import { UseLazyQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from '@reduxjs/toolkit/query';
import { useSearchBar } from './hooks/useSearchBar';
import SearchResultItem from './SearchResultItem';


interface SearchBarProps<Type> {
  value: Type[];
  name: string;
  barLabel: string;
  setValue: (valueArr: (Type)[]) => void
  useLazySearchQuery: UseLazyQuery<QueryDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, Type[], "spotifyBasicApi">>;
}

const SearchBarGeneric = <Type extends ISearchResult,>({
  value,
  name,
  barLabel,
  setValue,
  useLazySearchQuery,
}: SearchBarProps<Type>) => {

  const {
    open,
    setOpen,
    handleChange,
    handleInputChange,
    loading,
    options
  } = useSearchBar<Type>({ useLazySearchQuery, setValue });

  return (
    <Box display={"grid"} alignItems={"center"}>
      {typeof value !== "string" ?
        <Autocomplete<Type, true, false, true>
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
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
          onChange={handleChange}
          onInputChange={handleInputChange}
          loading={loading}
          options={options}
          renderOption={(props, option) => <SearchResultItem props={props} option={option} type={name} />}
          renderInput={(params) => <SearchTextArea params={params} label={barLabel} loading={loading} />}
        />
        :
        <Box>
          String type autocomplete instance should be rendered
        </Box>
      //   <Autocomplete<string, true, false, true>
      //   multiple
      //   autoHighlight
      //   sx={{marginBlock: 2}}
      //   clearOnBlur={false}
      //   id={name}
      //   open={open}
      //   value={value}
      //   onOpen={() => setOpen(true)}
      //   onClose={() => setOpen(false)}
      //   filterOptions={(x) => x}
      //   isOptionEqualToValue={(option, value) => option.id === value.id}
      //   getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
      //   onChange={handleChange}
      //   onInputChange={handleInputChange}
      //   loading={loading}
      //   options={options}
      //   renderOption={(props, option) => <SearchResultItem props={props} option={option} type={name} />}
      //   renderInput={(params) => <SearchTextArea params={params} label={barLabel} loading={loading} />}
      // />
      }
    </Box>
  );
}

export default SearchBarGeneric;