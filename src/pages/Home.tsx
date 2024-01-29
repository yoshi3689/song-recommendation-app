import { Box, Button, Collapse, Container, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import { searchTracks } from '../features/API/searchTracks';
import { searchArtists } from '../features/API/searchArtists';
import { getTrackRecommendations } from '../features/API/getTrackRecommendations';


import Section from '../components/Section/Section';
import TrackList from '../components/TrackList/TrackList';
import DetailedSettings from '../components/DetailedSettings/DetailedSettings';
import { ISearchResult } from '../features/types/ISearchResult';

const Home = () => {
  const [tracks, setTracks] = React.useState<any[]>([]);
  const [trackOptions, setTrackOptions] = React.useState<readonly any[]>([]);

  const [artists, setArtists] = React.useState<any[]>([]);
  const [artistOptions, setArtistOptions] = React.useState<readonly any[]>([]);

  const [genres, setGenres] = React.useState<readonly string[]>([]);

  useEffect(() => {
    const g = artists.map(a => a.genres as string[]).flat();
    setGenres(Array.from(new Set([...genres, ...g])).slice(0, 5))
  }, [artists])
  console.log(genres)

  const [recommendations, setRecommendations] = React.useState<any[]>([]);
  const fetchAndSetRecs = async () => {
    const qsConnector: string = "%2C"
    const qs = {
      limit: "10",
      market: "ES",
      seed_tracks: tracks.map(t => t.id).join(qsConnector),
      seed_artists: artists.map(t => t.id).join(qsConnector),
      seed_genres: genres.join(qsConnector),
    }

    const generateQs = Object.entries(qs);
    const formattedQs = generateQs.map(e => e[0] + "=" + e[1]).join("&")
    console.log(formattedQs)
    const recs = await getTrackRecommendations(formattedQs)
    console.log(recs)
    setRecommendations(recs.tracks);
  }
  return (
    <Container>
      <Box sx={{paddingBlock: 3}}>
        <Typography variant='h3' gutterBottom>GrooveGuru</Typography>
      {/* <Typography variant='subtitle1'>Craft Seamless Sets, Elevate Your Mix: Spinfluence</Typography> */}
      <Typography variant='subtitle2' gutterBottom>Unleash the DJ in You with Personalized Recommendations powered by Spotify</Typography>
      </Box>

      <Section sectionTitle="Preferences">
        <Box sx={{mb: 3}}>
      <SearchBar
          options={trackOptions}
          setOptions={setTrackOptions}
          value={tracks}
          setValue={setTracks}
          search={searchTracks}
          name={"track-search"}
          barLabel={"Track Name"}
          renderOption={
            (props, option) => {
        return (
          <li {...props} key={option.id}>
            <Grid container alignItems="center" justifyContent={"space-between"}>
              <Grid item sx={{ display: 'flex', width: 64, height: 64, pr: 2  }}>
                {option.album ?
                  <img
                  src={`${(option.album.images as any[])[2].url}`}
                />
                : <span>none</span>
              }
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 90px)', wordWrap: 'break-word'}}>
                <Box>
                    {option.name}
                </Box>
                {option.artists && (option.artists as any[]).map((artist, i) => (
                  <Typography
                    key={option.name + artist + i}
                    variant='caption'
                    sx={{ fontWeight: artist.highlight ? 'bold' : 'regular' }}
                  >
                    {artist.name}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </li>
        );
      }
          }
        />
        
      <SearchBar
          options={artistOptions}
          setOptions={setArtistOptions}
          value={artists}
          setValue={setArtists}
          search={searchArtists}
          name={"artist-search"}
          barLabel={"Artist Name"}
          renderOption={
            (props, option) => {
              const images = option.images as any[];
        return (
          <li {...props} key={option.id}>
            <Grid container alignItems="center" >
              <Grid item sx={{ display: 'flex', width: 64, height: 64 }}>
                {images.length ? <img
                  srcSet={`${(images)[images.length - 1].url}?w=64&h=64&fit=crop&auto=format&dpr=2 2x`}
                  src={`${(images)[images.length - 1].url}?w=64&h=164&fit=crop&auto=format`}
                  width="64px"
                />
                : <span>none</span>
              }
              </Grid>
              <Grid component="span" item sx={{ width: 'calc(100% - 64px)', wordWrap: 'break-word' }} >
                <Box
                  >
                    {option.name}
                </Box>
                <Box component="span" display={"flex"} justifyContent="space-between">
                  {option.genres && (option.genres as any[]).map((genre, i) => (
                    <Typography
                    key={option.name + genre + i}
                    variant='caption'
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
          }
      />

      <DetailedSettings />
      <Button variant="contained" onClick={fetchAndSetRecs}>
        <Typography color="white">get recs!</Typography>
      </Button>
      </Box>
      </Section>
      {recommendations.length > 0 && recommendations ?
        <Section sectionTitle="Results">
        <TrackList tracks={recommendations} />
        </Section>
        : <Typography variant="h5">No Results Found</Typography>
      }
    </Container>
  )
}

export default Home