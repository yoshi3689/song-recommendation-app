import { AutocompleteRenderInputParams, CircularProgress, TextField } from '@mui/material'
import React from 'react'


interface ISearchTextAresProps {
  params: AutocompleteRenderInputParams
  label: string
  loading: boolean

}

const SearchTextArea = ( {params, label, loading}: ISearchTextAresProps ) => {
  return (
        <TextField
          {...params}
          label={label}
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
      )
}

export default SearchTextArea