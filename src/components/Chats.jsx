import React from "react";
import List from '@mui/material/List';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
import {Chat} from "./index"
import { makeStyles } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: '36cm',
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

const Chats = (props) => {
    return (
        <List className="classes.root">
            {props.chats.map((chat, index) => {
                return <Chat text={chat.text} type={chat.type} key={index.toString()} /> 
            })}
        </List>
      );
}

export default Chats;