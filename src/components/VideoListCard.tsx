import { Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';

interface DarkVideoCardProps {
  thumbnailSrc: string;
  title: string;
  channelName: string;
  views: number;
  timeAgo: string;
}

const DarkVideoCard: React.FC<DarkVideoCardProps> = ({
  thumbnailSrc,
  title,
  channelName,
  views,
  timeAgo,
}) => {
  return (
    <Paper
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "0",
        marginY: '10px'
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Image
            height={300}
            width={300}
            style={{ width: '100%', height: '100%', borderRadius: "10px", objectFit: 'cover' }}
            src={thumbnailSrc}
            alt="Video thumbnail"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            sx={{ fontWeight: 'normal' }}
            fontSize={"16px"}
          >
            {title.slice(0, 60) + "..."}
          </Typography>
          <Typography variant="subtitle1" fontSize={"14px"} sx={{ color: "#909090" }}>
            {channelName}
          </Typography>
          <Typography variant="subtitle2" fontSize={"14px"} sx={{ color: "#909090" }}>
            {views} views
          </Typography>
          <Typography variant="subtitle2" fontSize={"14px"} sx={{ color: "#909090" }}>
            {timeAgo}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DarkVideoCard;
