import Autocomplete from '@mui/material/Autocomplete';
import { Alert, Box, Typography } from '@mui/material';
import { ISearchResult } from '../../features/types/ISearchResult';
import SearchTextArea from './SearchTextArea';
import { UseLazyQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from '@reduxjs/toolkit/query';
import { useSearchBar } from './hooks/useSearchBar';
import SearchResultItem from './SearchResultItem';
import NotificationPopup from '../../components/Notification/Notification';


interface SearchBarProps<Type> {
  value: Type[];
  name: string;
  barLabel: string;
  error: string;
  onNotificationClose: () => void
  setValue: (valueArr: (Type)[]) => void
  useLazySearchQuery: UseLazyQuery<QueryDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, Type[], "spotifyBasicApi">>;
}

const SearchBarGeneric = <Type extends ISearchResult,>({
  value,
  name,
  barLabel,
  error,
  onNotificationClose,
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
      {error && <NotificationPopup message={error} severity='error' onClose={onNotificationClose} />}
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
          renderOption={(props, option) => <SearchResultItem props={props} option={option} key={option.id} type={name} />}
          renderInput={(params) => <SearchTextArea isError={error?true:false} params={params} label={barLabel} loading={loading} />}
        />
    </Box>
  );
}

export default SearchBarGeneric;