import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { ISearchResult } from '../../features/types/ISearchResult';

interface ISearchResultItem{
  props: React.HTMLAttributes<HTMLElement>
  option: ISearchResult
  type: string
}

const SearchResultItem = ({props, option, type}: ISearchResultItem) => {
  const images = option.images ? option.images : option.album?.images;
  const captions = type.includes("artist") ? (option as ISearchResult).genres : option.artists?.map(a => a.name);
  const imageToRender = images?.length
    ? <img
        srcSet={`${images[2].url}?w=64&h=64&fit=crop&auto=format&dpr=2 2x`}
        src={`${images[2].url}?w=64&h=164&fit=crop&auto=format`}
        width="64px"
        height="64px"
      />
    : <span>N/A</span>
  return (
    <li {...props} key={option.id}>
      <Grid container alignItems="center" justifyContent={"space-between"}>
        <Grid item display="flex" alignItems="center" justifyContent="center" sx={{ display: 'flex', width: 64, height: 64 }}>
          {imageToRender}
        </Grid>
        <Grid item sx={{ width: 'calc(100% - 90px)', wordWrap: 'break-word' }} >
          <Box>
              {option.name}
          </Box>
          <Box display={"flex"}>
            {(captions as any[]).map((genre, i) => (
            <Typography
              key={option.name + genre + i}
              variant='caption'
              sx={{ mr : 1 }}  
            >
              {genre}
            </Typography>
          ))}
          </Box>
        </Grid>
      </Grid>
    </li>
  );
}

export default SearchResultItem