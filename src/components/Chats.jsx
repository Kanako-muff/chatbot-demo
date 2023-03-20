import React from "react";
import List from '@mui/material/List';
import {Chat} from "./index"
// import { makeStyles } from "@mui/material";

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