import { useRef } from 'react'
import ChatBox from './ChatBox'
import SendMessage from './SendMessage'
function Messenger() {
  const scroll:any = useRef()
  return (
    <div>
      <ChatBox scroll={scroll}/> 
      <SendMessage scroll={scroll}/>
    </div>
  )
}

export default Messenger