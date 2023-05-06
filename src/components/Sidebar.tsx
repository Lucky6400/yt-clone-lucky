import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Box, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const router = useRouter();

  return (
    <Box sx={{ position: 'fixed', left: 0, top: '60px', backgroundColor: '#000', width: '300px', zIndex: 9999, minHeight: '100vh' }}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader sx={{ backgroundColor: '#000', color: '#909090'}} component="div" id="nested-list-subheader">
            Menu
          </ListSubheader>
        }
      >
       <ListItemButton>
        <ListItemIcon>
          <HomeIcon sx={{ color: '#fff'}} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WhatshotIcon sx={{ color: '#fff'}} />
        </ListItemIcon>
        <ListItemText primary="Shorts" />
      </ListItemButton>
      <ListItemButton onClick={() => router.push('/subscriptions')}>
        <ListItemIcon>
          <SubscriptionsIcon sx={{ color: '#fff'}} />
        </ListItemIcon>
        <ListItemText primary="Subscriptions" />
      </ListItemButton>

      <Divider  sx={{ backgroundColor: '#808080', width: '90%', margin: '10px auto' }} />

      <ListItemButton>
        <ListItemIcon>
          <VideoLibraryIcon sx={{ color: '#fff'}} />
        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <HistoryIcon sx={{ color: '#fff'}} />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PlaylistPlayIcon sx={{ color: '#fff'}} />
        </ListItemIcon>
        <ListItemText primary="Your videos" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WatchLaterIcon sx={{ color: '#fff'}} />
        </ListItemIcon>
        <ListItemText primary="Watch later" />
      </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon sx={{ color: '#fff'}} />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder sx={{ color: '#fff'}} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}