import { collection, onSnapshot } from 'firebase/firestore';
import {useState , useEffect} from 'react'
import { db } from '../config/firebaseConfig';
import Message from './Message';
const ChatBox = () => {
  const messagesCollectionRef = collection(db , 'messages') ;
  const [messages , setmessages] = useState<any>([]) ; 
  useEffect(()=> {
    onSnapshot(messagesCollectionRef , data => {
      setmessages(data.docs.map(e => {return {...e.data() , id:e.id}}))
    })
  },[])
  return (
    <div className='w-screen  h-screen mt-[-72px] bg-red-600 overflow-y-auto'>
      {
        messages.length > 0 && messages.map((d ,i) => <Message key={i} {...d}/>)
      }
    </div>
  )
}

export default ChatBox