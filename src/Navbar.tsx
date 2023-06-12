import { GoogleAuthProvider } from 'firebase/auth'
import { BsLinkedin } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import { auth } from './config/firebaseConfig'
import { signInWithRedirect } from 'firebase/auth';
import { useUserContext } from './contexts/user';

const Navbar = () => {
  const {user}: any = useUserContext();
  
  const signin = ():void => {
    console.log("asd")
    const Provider = new GoogleAuthProvider ; 
    signInWithRedirect(auth,Provider) ;
  }
  const signout = ():void => {
    auth.signOut() ; 
  }
  return (
            <nav className='fixed top-0  w-screen h-10 drop-shadow-md bg-white flex items-center'>
          <div className='container mx-auto flex justify-between items-center '>
            <h6 className='text-purple-700 font-medium'>Messenger</h6>
            <div className='flex gap-6 items-center'>
            <ul className='flex gap-2 items-center'>
              <li className='text-gray-800 cursor-pointer text-xl '><ImGithub/></li>
              <li className='text-gray-800 cursor-pointer text-xl'><BsLinkedin/></li>
            </ul>
            {user?.uid ?<button className=' bg-gray-900 text-white p-2 rounded-sm text-sm h-[29px] flex justify-center items-center' onClick={signout}>log out </button> :<button className=' bg-gray-900 text-white p-2 rounded-sm text-sm h-[29px] flex justify-center items-center' onClick={signin}>log in </button> 
            
          }
            {/* <button className=' bg-gray-900 text-white p-2 rounded-sm text-sm h-[29px] flex justify-center items-center' onClick={signin}>log in </button> */}
          </div>
          </div>
      </nav>

  )
}

export default Navbar