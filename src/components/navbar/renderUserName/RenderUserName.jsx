import { AiOutlineUser } from 'react-icons/ai'
import RenderUserNameStyle from './RenderUserNameStyle.scss'

export const RenderUserName = ({ userName, isMobile, prop }) => {
  return (
    <div className={!isMobile ? prop : 'navbar-user-none'}>
      <AiOutlineUser className='icon-user' />
      <p className='user-email-text'>{userName}</p>
    </div>
  )
}
