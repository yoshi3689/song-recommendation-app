import React from 'react'
import { Box, Button, Container,Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Typography, createTheme } from '@mui/material'
import HeadsetIcon from '@mui/icons-material/Headset';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { BookmarkOutlined, ExitToApp, PlayCircle } from '@mui/icons-material';

interface ITrackCard {
  track: any
}

const color = {
  color: "#efefef"
}

const TrackCard = ({ track }: ITrackCard) => {
  const onLinkClicked = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <Card
      component="div"    
      sx={{
        backgroundImage: `url(${track.album.images[0] && track.album.images[0].url})`
        ,backgroundSize: 'cover'
      }}
      key={track.id}
  >
      <CardActionArea sx={{ pt: "65%",
        "&:hover": {
    transform: "scale(1.1)"
  }, }} aria-label={track.name} onClick={() => onLinkClicked(track.previewUrl)}>
        {/* <CardMedia component="img" src={track.album.images[0] && track.album.images[0].url} sx={{width: "100%", position: "absolute", top: 0, bottom: 50}} /> */}
    </CardActionArea>
    <Box sx={{ background: 'rgba(0, 0, 0, 0.3)' }}>
      <CardContent >
      <Typography noWrap sx={{color }} variant="body1">
        {track.name}
      </Typography>
      <Typography noWrap sx={{color }} variant="body2">
        {`by:${(track.artists as any[]).map(a => a.name)}`}
      </Typography>
    </CardContent>
    <CardActions sx={{display:"flex", justifyContent:"space-between", }} color='#efefef'>
      <Box>
        <IconButton sx={{color}} onClick={() => onLinkClicked(track.previewUrl)} size='small' aria-label="Play Now">
          <PlayCircle />
        </IconButton>
        <IconButton sx={{color}} onClick={() => onLinkClicked(track.externalUrls.spotify)} size='small' aria-label="Go to Spotify">
          <ExitToApp />
        </IconButton>
      </Box>
      <Box>
        <IconButton sx={{color}} size='small' aria-label="save">
          <BookmarkOutlined />
        </IconButton>    
      </Box>
    </CardActions>
    </Box>  
  </Card>
  )
}

{/* <ImageListItem key={track.id}>
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
        </ImageListItem> */}

export default TrackCard