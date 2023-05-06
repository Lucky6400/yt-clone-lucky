import Navbar from '@/components/Navbar'
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Avatar, Typography } from '@mui/material';
import { channels } from '../../data/channels'
import { videos } from '@/data/videos';
import VideoCard from '@/components/VideoCard';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Subscriptions: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Navbar />
            <Box sx={{ maxWidth: "100%", bgcolor: '#000', marginTop: '70px' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    {channels.map((item, index) => (
                        <Tab key={item.name + index} sx={{ color: '#fff' }} label={<>
                            <Avatar src={item.iconUrl} />
                            <Typography fontSize="13px" color="#fff" sx={{ marginY: '5px', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.name}</Typography>
                        </>} />
                    ))}

                </Tabs>
                {channels.map((item, index) => (
                    <TabPanel key={item.name + index} value={value} index={index}>
                        <Box display={"flex"} gap={"10px"} flexWrap={"wrap"} marginTop={'10px'}>
                            {videos.map((video) => (
                                <VideoCard key={video.id} video={video} />
                            ))}
                        </Box>
                    </TabPanel>
                ))}
            </Box>
        </>
    )
}

export default Subscriptions