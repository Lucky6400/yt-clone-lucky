import { Avatar, Box, Card, CardContent, CardMedia, IconButton, TextField, Theme, Typography } from '@mui/material';
import { ThumbUp, ThumbDown, Share, CloudDownload, MoreVert, Image, Download } from '@mui/icons-material';
import { makeStyles, styled } from '@mui/styles'
import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import YoutubeComment from '@/components/Comment';
import Navbar from '@/components/Navbar';

const useStyles: any = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    videoContainer: {
        flex: 1,
        marginTop: '80px'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap",
        width: '60%',
        padding: '10px'
    },
    actionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    channelDetailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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

    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);

    const handleLike = () => {
        setLiked(true);
        setDisliked(false);
    };

    const handleDislike = () => {
        setDisliked(true);
        setLiked(false);
    };

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#fff',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#909090',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#909090',
            },
            '&:hover fieldset': {
                borderColor: 'royalblue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'royalblue',
            },
        },
    });

    return (
        <Box>
            <Navbar />
            <div className={classes.videoContainer}>
                <Card>
                    <CardMedia
                        component="video"
                        height="500"
                        autoPlay
                        controls
                        sx={{
                            backgroundColor: '#000'
                        }}
                        src="https://www.shutterstock.com/shutterstock/videos/1063563805/preview/stock-footage-snow-and-sleet-falling-on-a-window-at-christmas-time-with-rain-drops-cold-wet-weather-on-window.webm"
                    />
                </Card>
            </div>
            <Box display="flex">

                <div className={classes.infoContainer}>

                    {/* Title Section */}
                    <Typography width={"100%"} marginY={"10px"} variant="h5">Never Gonna Give You Up</Typography>

                    {/* Channel Section */}
                    <Box display={"flex"} gap={"10px"}>
                        <Avatar src="https://via.placeholder.com/50x50" alt="Channel avatar" />
                        <Box>
                            <Typography fontSize={14} >Rick Astley</Typography>
                            <Typography fontSize={12} color={"#808080"} component={"small"}>1.23M subscribers</Typography>
                        </Box>

                        <Button variant="contained" color="error" sx={{ borderRadius: '999px', marginLeft: '60px' }}>
                            Subscribe
                        </Button>
                    </Box>

                    {/* Like Dislike */}
                    <Box display="flex" gap="10px">
                        <Button startIcon={<ThumbUp />} sx={{
                            ":disabled": {
                                color: 'royalblue'
                            },
                            color: 'white'
                        }} onClick={handleLike} variant='text' disabled={liked}>
                            Like
                        </Button>
                        <Button startIcon={<ThumbDown />} sx={{
                            ":disabled": {
                                color: 'royalblue'
                            },
                            color: 'white'
                        }} onClick={handleDislike} variant="text" disabled={disliked}>
                            Dislike
                        </Button>

                        <Button startIcon={<Share />} sx={{
                            ":disabled": {
                                color: 'royalblue'
                            },
                            color: 'white'
                        }} variant="text">
                            Share
                        </Button>

                        <Button startIcon={<Download />} sx={{
                            ":disabled": {
                                color: 'royalblue'
                            },
                            color: 'white'
                        }} variant="text">
                            Download
                        </Button>
                    </Box>

                    {/* Description Section */}
                    <Box width="100%" sx={{ backgroundColor: '#808080' }} padding={"10px"} borderRadius={"10px"} marginY={"20px"}>
                        <Typography fontSize={"14px"} color="white" width="100%">
                            <strong style={{ marginRight: '5px' }}> 16K views </strong>

                            {"   "}
                            6 hours ago
                        </Typography>

                        <Typography fontSize="14px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam culpa vel dolor obcaecati repellendus ratione ipsam, vero corrupti cum molestias nulla nisi libero temporibus. Rem amet magni quas, molestiae tempore soluta deleniti praesentium eligendi vitae. Delectus laboriosam laudantium tempore molestiae non id, ipsum rerum! Autem impedit delectus accusamus doloremque unde, nesciunt voluptatibus ullam illum. Molestias nihil deserunt assumenda officia adipisci velit, alias non inventore numquam!
                        </Typography>
                    </Box>

                    {/* Comments section */}
                    <Box width="100%">
                        <Typography>
                            219 Comments
                        </Typography>

                        <Box display="flex" alignItems={"center"} justifyContent={"space-around"}>
                            <Avatar />
                            <CssTextField variant="standard" InputLabelProps={{
                                style: {
                                    color: 'white'
                                }
                            }} sx={{ width: '90%', color: 'white' }} inputProps={{
                                style: {
                                    color: 'white',
                                    borderBottom: '1px solid #909090'
                                }
                            }} label="Add a comment" id="custom-css-outlined-input" />
                        </Box>

                        <Box width="100%">
                            <YoutubeComment
                                author="John Doe"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vel dolor varius, sed laoreet nulla vestibulum. Nulla nec scelerisque velit, quis interdum dolor."
                                avatar="https://picsum.photos/id/1015/200/200"
                            />
                            <YoutubeComment
                                author="Jane Doe"
                                content="Vestibulum euismod, turpis eget rhoncus convallis, nibh urna interdum eros, vitae vestibulum sapien lorem eget odio. Sed faucibus purus in eleifend porttitor."
                                avatar="https://picsum.photos/id/1011/200/200"
                            />

                        </Box>
                    </Box>
                </div>
            </Box>
        </Box>
    );
}

export default VideoPage;