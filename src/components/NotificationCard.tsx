import { Avatar, Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";

interface NotificationCardProps {
  avatarSrc: string;
  title: string;
  thumbnailSrc: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: 'transparent',
    margin: '10px 0'
  },
  avatar: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
    marginRight: "10px",
  },
  thumbnail: {
    width: 80,
    height: 50,
    objectFit: 'cover'
  },
}));

const NotificationCard: React.FC<NotificationCardProps> = ({
  avatarSrc,
  title,
  thumbnailSrc,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar src={avatarSrc} className={classes.avatar} />
      <Typography fontSize={"14px"} color={"white"} className={classes.title}>
        {title}
      </Typography>
      <img src={thumbnailSrc} alt="Thumbnail" className={classes.thumbnail} />
    </Box>
  );
};

export default NotificationCard;
