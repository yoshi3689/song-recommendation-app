import React, { SyntheticEvent, useEffect, useMemo } from 'react'
import { Autocomplete, AutocompleteChangeReason, Box, Typography } from '@mui/material'
import { useState } from 'react';
import SearchTextArea from '../../components/SearchBar/SearchTextArea';
import genreOptions from "../../data/genres.json"
import { generateChatCompletionprompt } from '../../features/utils/generateChatCompletionprompt';
import { useFetchChatCompletionsMutation } from '../../features/API/openAiApiSlice';

interface IGenreSearch {
  artists: string[];
}

const GenreSearch = ({ artists }: IGenreSearch) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [fetchChatCompletions, { data, error, isLoading }] = useFetchChatCompletionsMutation();

  const handleChange = (event: SyntheticEvent<Element, Event>, value: (string)[], reason: AutocompleteChangeReason) => {
    if (event.type !== "keydown" && reason !== "removeOption") {
      setValue(value);
    }
  }

  const handleInputChange = (event: React.SyntheticEvent<Element, Event>, newInputValue: string, reason: string) => {
    if (event.type !== "blur" && reason !== "reset" && newInputValue.trim() !== inputValue) {
      setInputValue(newInputValue)
      
    }
  }

  const discoverTags = async() => {
    // generate input prompt for the search completion AI 
    const promptInput = generateChatCompletionprompt(artists);
    // use the mutation function to get the tags
    const resultGenres = await fetchChatCompletions(promptInput);
    console.log(resultGenres)
    if (data) {
      setValue(data as string[])
    }
  }

  useEffect(() => {
    discoverTags()
  }, [artists])

  return (
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
        filterOptions={(x) => x}
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) =>option}
        onChange={handleChange}
        onInputChange={handleInputChange}
        loading={!genreOptions}
        options={genreOptions as string[]}
        renderOption={(props, option) => (
          <li>
            <Typography key={option}>{ option }</Typography>
          </li>)}
        renderInput={(params) => <SearchTextArea params={params} label={"Genre"} loading={!genreOptions} />}
      />
  )
}

export default GenreSearch