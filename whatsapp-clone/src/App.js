import React from "react";
import './App.css';
import Sidebar from "./Sidebar"
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios'
import {useEffect, useState} from 'react'

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(()=>{
    const pusher = new Pusher('49ec8537a8b9f00efd87', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage)=>{
      setMessages([...messages, newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
