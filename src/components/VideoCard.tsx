import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, CardActions, Icon, IconButton } from '@mui/material';
import { Image, PlaylistPlay } from '@mui/icons-material';
import { NextRouter, useRouter } from 'next/router';

type VideoCardProps = {
  video: {
    id: string;
    thumbnail: string;
    title: string;
    channel: string;
    views: number;
    posted: string;
    duration: string;
  };
  cardType?: string;
};
const VideoCard: React.FC<VideoCardProps> = ({ video, cardType }) => {
  const { id, thumbnail, title, channel, views, posted, duration } = video;
  const router: NextRouter = useRouter();
  return (
    <Card onClick={() => {
      if (cardType !== "Playlist") {
        router.push('video/id')
      }
    }} sx={{ width: 345, backgroundColor: '#000', cursor: 'pointer', position: 'relative', maxWidth: '100%' }}>

      {cardType && cardType === "Playlist" ?
        <Box position={"absolute"} top="0" right="0" width="50%" display="flex" gap="10px" justifyContent="center" alignItems="center" sx={{ backgroundColor: '#40404079', height: '140px', color: "#fff", fontSize: "22px" }}>

          <PlaylistPlay fontSize='large'/>

          <Typography color={"#fff"} fontWeight="bold" fontSize="20px">
            112
          </Typography>
        </Box>
        :
        <>
        </>
      }


      <CardMedia
        component="img"
        height="140"
        sx={{width: '100%'}}
        image={thumbnail}
        alt="green iguana"
      />
      <CardContent sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between', padding: '20px 0' }}>

        {cardType !== "Playlist" ?
          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Box>
          : <></>}
        <Box>
          <Typography gutterBottom lineHeight={"20px"} color={"white"} fontSize={'16px'} component="div">
            {title}
          </Typography>


          <Typography variant="body2" color="#808080">
            {channel}
          </Typography>
          {cardType && cardType === "Playlist" ? <Typography variant="body2" color="#808080">
            View full playlist
          </Typography> : <Typography variant="body2" color="#808080">
            {views} views . {posted} ago
          </Typography>}
        </Box>

        {cardType !== "Playlist" ?
          <IconButton onClick={e => e.stopPropagation()}>
            <MoreVertIcon sx={{ color: '#fff' }} />
          </IconButton>
          :
          <>
          </>
        }

      </CardContent>

    </Card>
  );
}

export default VideoCard;