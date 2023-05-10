import Data from '@/components/Library/Data'
import Navbar from '@/components/Navbar'
import VideoCard from '@/components/VideoCard'
import { videos } from '@/data/videos'
import { AccessTime, History, PlaylistPlay } from '@mui/icons-material'
import { Container } from '@mui/material'
import React from 'react'

const Library: React.FC = () => {
    return (
        <Container>
            <Navbar />
            
            <Data icon={<History/>} data={videos} title="History"/>

            <Data icon={<AccessTime/>} data={videos} title="Watch later"/>

            <Data icon={<PlaylistPlay/>} data={videos} title="Playlists"/>

        </Container>
    )
}

export default Library