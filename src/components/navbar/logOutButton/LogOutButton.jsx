import { AiOutlineLogout } from 'react-icons/ai'

export const LogOutButton = ({ onLogOutUser }) => {
  return (
    <div className='logout-container' onClick={onLogOutUser}>
      <AiOutlineLogout className='logout-button' />
      <p>Logout</p>
    </div>
  )
}
