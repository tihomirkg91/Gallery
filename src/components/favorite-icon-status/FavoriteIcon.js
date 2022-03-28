import { AiFillPicture, AiOutlinePicture } from 'react-icons/ai'
import FavoriteStyle from './FavoriteStyle.scss'

// Context
import { useContext } from 'react'
import { globalContext } from '../../stateContext/stateContexts.js'

const FavoriteIcon = ({ onFavoriteGallery }) => {
  const { favorite, isMobile } = useContext(globalContext)

  const NavbarVersionIcon = () => {
    return favorite ? (
      <AiFillPicture className='favorite-icon-navbar' />
    ) : (
      <AiOutlinePicture className='favorite-empty-icon-navbar' />
    )
  }

  const SidebarVersionIcon = () => {
    return favorite ? (
      <AiFillPicture className='favorite' />
    ) : (
      <AiOutlinePicture className='favorite-empty' />
    )
  }

  return isMobile ? (
    <div className='favorite-container' onClick={onFavoriteGallery}>
      <SidebarVersionIcon />
      <p>Favorite</p>
    </div>
  ) : (
    <div className='favorite-container-icon-navbar' onClick={onFavoriteGallery}>
      <NavbarVersionIcon />
      <p>Favorite</p>
    </div>
  )
}

export default FavoriteIcon
