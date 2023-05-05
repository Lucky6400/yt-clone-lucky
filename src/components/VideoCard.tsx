import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import { Image } from '@mui/icons-material';
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
};
const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const { id, thumbnail, title, channel, views, posted, duration } = video;
  const router: NextRouter = useRouter();
  return (
    <Card onClick={() => router.push('video/id')} sx={{ maxWidth: 345, backgroundColor: '#000', cursor: 'pointer' }}>

      <CardMedia
        component="img"
        height="140"
        image={thumbnail}
        alt="green iguana"
      />
      <CardContent sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between', padding: '20px 0' }}>
        <Box>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
        <Box>
          <Typography gutterBottom lineHeight={"20px"} color={"white"} variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="#808080">
            {channel}
          </Typography>
          <Typography variant="body2" color="#808080">
            {views} views . {posted} ago
          </Typography>
        </Box>

        <IconButton>
          <MoreVertIcon sx={{ color: '#fff' }} />
        </IconButton>
      </CardContent>

    </Card>
  );
}

export default VideoCard;