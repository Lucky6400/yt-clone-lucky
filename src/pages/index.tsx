import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import VideoCard from '@/components/VideoCard'
import { Box } from '@mui/material'
import {videos} from '../data/videos'

const Home: React.FC<{}> = () => {
  return (
    <main>
      <title>YT - Home</title>
      <Navbar />
      <Box display={"flex"} gap={"15px"} flexWrap={"wrap"} padding={'10px'} marginTop={'60px'}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </Box>
    </main>
  )
}

export default Home;