import { UseLazyQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from '@reduxjs/toolkit/query';
import React from 'react';

interface IUseSearchBarArgs<Type> {
  useLazySearchQuery: UseLazyQuery<QueryDefinition<string, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, Type[], "spotifyBasicApi">>;
  setValue: (valueArr: Type[]) => void
}

export const useSearchBar = <T>({
  setValue,
  useLazySearchQuery
}: IUseSearchBarArgs<T>) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly T[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [lazySearchTrigger, lazySearchRes] = useLazySearchQuery();
  const loading: boolean = lazySearchRes.isLoading && inputValue !== "" && open

  // https://medium.com/@cheahwen1997/debouncing-search-selection-with-lazy-loading-in-reactjs-mui-c725d4e3e1bc
  const debounceTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = (func: () => Promise<void>, delay: number) => {
    return (...args: []) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        func(...args);
        debounceTimeout.current = null;
      }, delay);
    };
  }

  const search = async () => {
    const { data } = await lazySearchTrigger(inputValue)
    setOptions(data ?? []);
  }

  const debouncedSearch = debounce(search, 700)

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValueInArray: T[]) => {
    if (event.type !== "keydown") {
      setValue(newValueInArray);
    }
  }

  const handleInputChange = (event: React.SyntheticEvent<Element, Event>, newInputValue: string, reason: string) => {
    if (event.type !== "blur" && reason !== "reset" && newInputValue.trim() !== inputValue) {
      setInputValue(newInputValue)
      debouncedSearch()
    }
  }

  return {open, setOpen, handleChange, handleInputChange, loading, options}
}