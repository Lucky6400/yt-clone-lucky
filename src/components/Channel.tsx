import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'

const Channel: React.FC = () => {
    return (
        <Box display={"flex"} gap={"10px"}>
            <Avatar src="https://via.placeholder.com/50x50" alt="Channel avatar" />
            <Box>
                <Typography fontSize={14} >Rick Astley</Typography>
                <Typography fontSize={12} color={"#808080"} component={"small"}>1.23M subscribers</Typography>
            </Box>

            <Button variant="contained" color="error" sx={{ borderRadius: '999px', marginLeft: '60px' }} size='small'>
                Subscribe
            </Button>
        </Box>
    )
}

export default Channel