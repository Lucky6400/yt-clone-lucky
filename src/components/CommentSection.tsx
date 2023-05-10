import { Avatar, Box, TextField, Typography } from '@mui/material'
import React from 'react'
import YoutubeComment from './Comment'
import { styled } from '@mui/styles';

const CommentSection: React.FC = () => {

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
        <Box width="100%">
            <Typography>
                219 Comments
            </Typography>

            <Box display="flex" gap={"10px"} alignItems={"center"} justifyContent={"space-around"}>
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

            <Box display={"flex"} flexDirection="column" width="100%">
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
    )
}

export default CommentSection