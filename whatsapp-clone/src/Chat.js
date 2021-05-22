import React, {useState} from 'react'
import "./Chat.css"
import {Avatar, IconButton} from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile'
import { InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic'
import axios from './axios'

function Chat({messages}) {
    const [input, setInput] = useState("");

    const sendMessage = async (e)=>{
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Yash Garg",
            timestamp: "Current time",
            received: true
        })

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((message)=>{
                    <p className={`chat_message ${message.received && "chat_receiver"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timestamp">{message.timestamp}</span>
                    </p>
                })}
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form action="">
                    <input value={input} onChange={e =>{setInput(e.target.value)}} type="text" placeholder="Type a message..."/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
