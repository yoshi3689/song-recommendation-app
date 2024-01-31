import { Box, Button, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import HeadsetIcon from '@mui/icons-material/Headset';

interface ITrackListProps {
  tracks: any[];
}

const TrackList = ({ tracks }:ITrackListProps) => {
  return (
        <ImageList variant='masonry' sx={{width:"100%"}} >
        {tracks.map((track) => {
        return (
        <ImageListItem key={track.id}>
          {track.album.images[0] &&
          <img
            srcSet={`${track.album.images[0].url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${track.album.images[0].url}?w=248&fit=crop&auto=format`}
            alt={track.title}
            loading="lazy"
          />}
          <ImageListItemBar
            title={track.name}
              subtitle={`by:${(track.artists as any[]).map(a => a.name)}`}
              sx={{flexDirection: "row"}}
              actionIcon={
                <>
                  <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${track.title}`}
              >
                <Link component={"a"} href={track.externalUrls.spotify}><InfoIcon /></Link>
              </IconButton>
                  <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${track.title}`}
              >
                <Link color={"primary"} href={track.externalUrls.spotify}><HeadsetIcon /></Link>
              </IconButton>
                </>
            }
          />
        </ImageListItem>
      )
      })}
    </ImageList>
  )
}

export default TrackList