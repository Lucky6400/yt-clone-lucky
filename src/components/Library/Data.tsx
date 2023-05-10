import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import VideoCard from '../VideoCard'

const Data: React.FC<{ data: any[], title: string, icon: React.ReactNode }> = ({ data, title, icon }) => {
    return (
        <>
            <Typography sx={{ marginTop: '80px', display: 'flex', alignItems: 'center', gap: '10px' }} color={"#fff"}>
                {icon} {title}
            </Typography>
            <Divider sx={{ backgroundColor: '#808080', width: '100%', margin: '10px auto' }} />

            <Box display={"flex"} gap={"15px"} justifyContent={"center"} flexWrap={"wrap"} padding={'10px'} >
                {data.slice(0, 6).map((video) => (
                    <VideoCard key={video.id} video={video} cardType={title === "Playlists" ? "Playlist" : ""} />
                ))}
            </Box>
        </>
    )
}

export default Data