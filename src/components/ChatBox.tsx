import { collection, onSnapshot ,orderBy,query} from 'firebase/firestore';
import {useState , useEffect} from 'react'
import { db } from '../config/firebaseConfig';
import Message from './Message';

const ChatBox = ({scroll}:any) => {
  const messagesCollectionRef = collection(db , 'messages') ;
  const [messages , setmessages] = useState<any>([]) ; 
  useEffect(()=> {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
    )
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages:any = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setmessages(messages);
      scroll.current.scrollIntoView({ behavior: "smooth" });
    });
    return () => unsubscribe;
  },[])
  return (
    <div className='w-screen  h-screen mt-[-72px]  overflow-y-auto'>
      {
        messages.length > 0 && messages.map((d ,i) => <Message key={i} {...d}/>)
      }
      <span ref={scroll}></span>
    </div>
  )
}

export default ChatBox
