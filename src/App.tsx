import Navbar from './Navbar';
import {FaFacebookMessenger} from 'react-icons/fa'
import { useUserContext } from './contexts/user';
import { User } from 'firebase/auth';
import Messenger from './components/Messenger';
import { auth } from './config/firebaseConfig';
function App() {
  const {user}: any = useUserContext();
  console.log({user , auth:auth.currentUser})

  return (
    < >
      <main className='w-screen h-screen flex items-center justify-center bg-purple-50 relative'>
      <Navbar/>
            {
              user?.uid ? <Messenger/> : <h1 className='font-bold text-sm flex gap-2 items-center  '>No Message <FaFacebookMessenger className={"text-pink-500"}/></h1>
            }
      </main>
    </>
  )
}

export default App
