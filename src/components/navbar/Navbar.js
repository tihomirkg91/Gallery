import React, { useContext } from 'react'

// Style
import NavbarStyle from './NavbarStyle.scss'
import { IconContext } from 'react-icons'

// Components
import { RenderUserName } from './renderUserName/RenderUserName'
import { LogOutButton } from './logOutButton/LogOutButton'
import { RenderToggleButton } from './renderToggleButton/RenderToggleButton'
import FavoriteIcon from '../favorite-icon-status/FavoriteIcon'
import BackArrow from '../back-arrow/BackArrow'

// Context
import { globalContext } from '../../stateContext/stateContexts'

// Main component
const Navbar = ({
  onLogOutUser,
  onFavoriteGallery,
  onHamburgerMenu,
  onBackArrow,
}) => {
  const { userName, isMobile, userLogin, renderBackArrow } =
    useContext(globalContext)

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <div className='navbar'>
          {userLogin ? (
            <>
              <RenderToggleButton onHamburgerMenu={onHamburgerMenu} />
              <RenderUserName
                userName={userName}
                isMobile={isMobile}
                prop='navbar-user-desktop'
              />
              {!isMobile && !renderBackArrow ? (
                <FavoriteIcon onFavoriteGallery={onFavoriteGallery} />
              ) : renderBackArrow ? (
                <BackArrow onBackArrow={onBackArrow} />
              ) : null}
              <LogOutButton onLogOutUser={onLogOutUser} />
            </>
          ) : null}
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
