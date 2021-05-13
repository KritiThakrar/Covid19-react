import React from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from './chatbot/ActionProvider';
import config from './chatbot/config';
import MessageParser from './chatbot/MessageParse';
import '../../App.css';

import '../../App.css'

const Chat = () => {
    return ( 
        <div className="chat">
            <div className="chat-header" style={{maxWidth:"300px"}}>
            <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
        />
        </div>
        </div>
     );
}
 
export default Chat;