import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { ISearchResult } from '../../features/types/ISearchResult';
import { ISeedTrack } from '../../features/types/ISeedTrack';
import { ISeedArtist } from '../../features/types/ISeedArtist';

interface ISearchResultItem{
  props: React.HTMLAttributes<HTMLElement>
  option: ISearchResult
  type: string
}

const SearchResultItem = ({props, option, type}: ISearchResultItem) => {
  const images = type.includes("artist") ? (option as ISeedArtist).images : (option as ISeedTrack).album.images;
  const captions = type.includes("artist") ? (option as ISeedArtist).genres : (option as ISeedTrack).artists.map(a => a.name);
  const imageToRender = ((images)[images.length - 1] as any).url
  return (
    <li {...props} key={option.id}>
      <Grid container alignItems="center" justifyContent={"space-between"}>
        <Grid item display="flex" alignItems="center" justifyContent="center" sx={{ display: 'flex', width: 64, height: 64 }}>
          {images.length ? <img
            srcSet={`${imageToRender}?w=64&h=64&fit=crop&auto=format&dpr=2 2x`}
            src={`${imageToRender}?w=64&h=164&fit=crop&auto=format`}
            width="64px"
            height="64px"
          />
          : <span>N/A</span>
        }
        </Grid>
        <Grid item sx={{ width: 'calc(100% - 90px)', wordWrap: 'break-word' }} >
          <Box
            >
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