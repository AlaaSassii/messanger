import React from 'react'
import { useUserContext } from '../contexts/user'

const Message = ({avatar, createdAt , name , text}:any) => {
            const {user}:any = useUserContext() ; 
  return (
    <div>
            {/* <p>{createdAt.toString()}</p> */}
            <div>
            <div>{name}</div>
            <p>{text}</p>
            </div>


    </div>
  )
}

export default Message