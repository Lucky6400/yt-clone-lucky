import { Avatar, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import ThumbUpIconOutlined from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIconOutlined from '@mui/icons-material/ThumbDownOutlined';
import FavoriteIconOutlined from '@mui/icons-material/FavoriteOutlined';
interface Props {
    author: string;
    content: string;
    avatar: string;
}

const useStyles = makeStyles({
    comment: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    avatar: {
        marginRight: '1rem',
    },
    commentText: {
        background: '#000',
        padding: '1rem',
        borderRadius: '1rem',
        marginLeft: '0.5rem',
        width: '90%',
    },
    author: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
    },
});

export default function YoutubeComment({ author, content, avatar }: Props) {
    const classes = useStyles();

    return (
        <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} marginBottom="10px">
            <Avatar alt={author} src={avatar} className={classes.avatar} />
            <div className={classes.commentText}>
                <Typography variant="body2" component="span">
                    <span className={classes.author}>{author}</span> <small>5 hours ago</small> <br />
                    {content}
                </Typography>
                <Box width="100%" gap="20px">
                    <IconButton sx={{
                        color: 'white',
                        fontSize: '10px'
                    }}>
                        <ThumbUpIconOutlined sx={{
                            fontSize: '16px'
                        }} />
                    </IconButton>
                    <IconButton sx={{
                        color: 'white',
                        fontSize: '13px'
                    }}>
                        <ThumbDownIconOutlined sx={{
                            fontSize: '16px'
                        }} />
                    </IconButton>
                    <IconButton sx={{
                        color: 'white',
                        fontSize: '13px'
                    }}>
                        <FavoriteIconOutlined sx={{
                            fontSize: '16px'
                        }} />
                    </IconButton>
                </Box>
            </div>
        </Box>
    );
}
