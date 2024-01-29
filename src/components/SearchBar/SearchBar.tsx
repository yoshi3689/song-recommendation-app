import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Grid,  } from '@mui/material';
import { searchTracks } from '../../features/API/searchTracks';
import { SearchOutlined } from '@mui/icons-material';
import { ISearchResult } from '../../features/types/ISearchResult';
import { useDispatch } from 'react-redux';
import SearchTextArea from './SearchTextArea';
import { UseLazyQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from '@reduxjs/toolkit/query';
import { useSearchBar } from './hooks/useSearchBar';
import SearchResultItem from './SearchResultItem';


interface SearchBarGenericProps<Type> {
  // these three will replaced by resources from useQuery
  // setOptions will no longer exist anymore, because calling a query will set the state also
  value: Type[];
  name: string;
  barLabel: string;
  setValue: (valueArr: Type[]) => void
  useLazySearchQuery: UseLazyQuery<QueryDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, Type[], "spotifyBasicApi">>;
}

const SearchBar = <Type extends ISearchResult,>({
  value,
  name,
  barLabel,
  setValue,
  useLazySearchQuery,
}: SearchBarGenericProps<Type>) => {

  const {
    open,
    setOpen,
    handleChange,
    handleInputChange,
    loading,
    options
  } = useSearchBar<Type>({ useLazySearchQuery, setValue });

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
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
        onChange={handleChange}
        onInputChange={handleInputChange}
        loading={loading}
        options={options}
        renderOption={(props, option) => <SearchResultItem props={props} option={option} type={name} />}
        renderInput={(params) => <SearchTextArea params={params} label={barLabel} loading={loading} />}
      />
      
    </Box>
  );
}

export default SearchBar;