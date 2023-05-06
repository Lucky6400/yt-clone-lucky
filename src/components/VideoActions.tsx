import { Download, Share, ThumbDown, ThumbUp } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'

const VideoActions: React.FC = () => {
    return (
        <Box display="flex" gap="10px">
            <Button startIcon={<ThumbUp />} sx={{
                ":disabled": {
                    color: 'royalblue'
                },
                color: 'white'
            }} variant='text'>
                Like
            </Button>
            <Button startIcon={<ThumbDown />} sx={{
                ":disabled": {
                    color: 'royalblue'
                },
                color: 'white'
            }} variant="text">
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
    )
}

export default VideoActions