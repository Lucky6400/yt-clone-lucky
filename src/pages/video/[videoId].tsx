import { Box, Card, CardMedia, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Channel from '@/components/Channel';
import VideoActions from '@/components/VideoActions';
import Description from '@/components/Description';
import CommentSection from '@/components/CommentSection';
import DarkVideoCard from '@/components/VideoListCard';
import { recommendedVideos } from '@/data/videos';

const useStyles: any = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    videoContainer: {
        width: '100%',
        marginTop: '80px',
        height: 'max-content',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
        padding: '10px',
        overflowY: 'visible',
    },
    inputField: {
        '& .MuiInputBase-input': {
            color: '#fff', // Set text color to black
            '&::placeholder': {
                color: '#808080', // Set placeholder color to gray
            },
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#808080', // Set outline color to gray when focused
            },
            '&:hover fieldset': {
                borderColor: '#808080', // Set outline color to gray on hover
            },
            borderColor: '#808080', // Set default outline color to gray
        },
    },

}));

const VideoPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Box width="100vw">
            <Navbar />
            <div className={classes.videoContainer}>
                <Card>
                    <CardMedia
                        component="video"
                        height="500"
                        autoPlay={false}
                        controls
                        sx={{
                            backgroundColor: '#000'
                        }}
                        src="https://www.shutterstock.com/shutterstock/videos/1063563805/preview/stock-footage-snow-and-sleet-falling-on-a-window-at-christmas-time-with-rain-drops-cold-wet-weather-on-window.webm"
                    />
                </Card>
            </div>
            <Box display="flex" justifyContent={"space-between"} flexWrap={"wrap"}>

                {/* Left */}
                <Box sx={{ 
                    width: {
                        xs: '100vw',
                        sm: '100vw',
                        md: '60%'
                    },
                    height: 'max-content'
                }} className={classes.infoContainer}>

                    {/* Title Section */}
                    <Typography width={"100%"} marginY={"10px"} variant="h5">Never Gonna Give You Up</Typography>

                    {/* Channel Section */}
                    <Channel />

                    {/* Like Dislike */}
                    <VideoActions />

                    {/* Description Section */}
                    <Description />

                    {/* Comments section */}
                    <CommentSection />

                </Box>
                {/*********/}

                <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                sx={{ width: {
                    xs: "100%",
                    sm: "100%",
                    md: "35%"
                }}}>
                    <Typography width={"100%"} marginY={"20px"} variant="h5">Recommended for you</Typography>
                    {recommendedVideos.map((item, index) => (

                        <DarkVideoCard
                            key={item.title + index}
                            thumbnailSrc={item.thumbnailSrc}
                            title={item.title}
                            channelName={item.channelName}
                            views={item.views}
                            timeAgo={item.timeAgo}
                        />
                    ))}
                </Box>

            </Box>
        </Box>
    );
}

export default VideoPage;