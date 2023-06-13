import React from 'react'
import { useUserContext } from '../contexts/user'

const Message = ({avatar, createdAt , name , text}:any) => {
            const {user}:any = useUserContext() ; 
            const Nami = user.photoURL === avatar
            console.log({Nami , displayName:user.displayName  , name})
  return (
    <div className='p-2'>
            {/* <p>{Date(createdAt).toString().split(" ")}</p> */}
            <div className={`flex items-end ${Nami && "flex-row-reverse"}`}>
            <div className='flex flex-col '>
              <h6>{name}</h6>
              <img className='w-4 mx-auto' src={avatar} alt={name} />
            </div>
            <p>{text}</p>
            </div>


    </div>
  )
}

export default Message