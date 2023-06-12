import {useState , ChangeEvent} from 'react'
import { useUserContext } from '../contexts/user'
import {BsFillSendFill} from 'react-icons/bs'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebaseConfig' ;
const SendMessage = () => {
  // states
  const {user:{uid , displayName , photoURL}}:any = useUserContext()
  const [message , setmessage] = useState<string>("");
  // functions 
  const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
    setmessage(e.target.value)
  }
  const sendMessage = async () => {
    if(message.trim() === "") return  
    addDoc(collection(db , "messages"),{
      text:message , 
      name:displayName ,
      avatar:photoURL , 
      createdAt:serverTimestamp() 
    }).then(()=>setmessage(""))

  } 
  
  return (
    <div className='w-screen absolute bottom-1 left-0 rounded-lg flex bg-white p-1'>
            <input 
            type="text"
            placeholder='Send a message'
            onChange={handleChange}
            value={message}
            className=' flex-1 outline-none'
            />
            <button className='bg-white cursor-pointer ' onClick={sendMessage} ><BsFillSendFill/></button>
    </div>
  )
}

export default SendMessage