import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../BotAvatar/BotAvatar";

const config = {
    initialMessages: [
      createChatBotMessage(`Hello There!! How can I help You?`, 
      // {widget: "todos",}
        ),
    ],
    botName: "Coronavirus Chatbot",
    customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />,
    },
    customStyles: {
      // Overrides the chatbot message styles
      botMessageBox: {
        backgroundColor: "purple",
      },
      // Overrides the chat button styles
      chatButton: {
        backgroundColor: "purple",
      },
    },
  }
  
  export default config