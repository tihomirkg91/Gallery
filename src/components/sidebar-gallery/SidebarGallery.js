import React, { useContext } from 'react'

// Style
import SidebarGallerStyle from './SidebarGalleryStyle.scss'
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineSearch,
} from 'react-icons/ai'

// Context
import { fetchedData, globalContext } from '../../stateContext/stateContexts'

// component
import { RenderUserName } from '../navbar/renderUserName/RenderUserName'
import FavoriteIcon from '../favorite-icon-status/FavoriteIcon'
import BackArrow from '../back-arrow/BackArrow'

// Helper components will render in main component
const RenderSidebarPictures = ({ item, selectedImageItem }) => {
  return (
    <>
      <div className='image-container'>
        <img src={item.src.tiny} alt='item.alt' className='sidebar-image' />
        <p className='image-name'>{item.photographer}</p>
      </div>
      <button onClick={() => selectedImageItem(item)} className='image-button'>
        Review
        <AiOutlineArrowRight className='AiIcons-right-arrow' color='white' />
      </button>
    </>
  )
}

const RenderToggleButton = ({ onHamburgerMenu }) => {
  return (
    <div className='navbar-toggle'>
      <AiOutlineArrowLeft
        onClick={onHamburgerMenu}
        className='AiIcons-back-arrow'
        color='black'
      />
    </div>
  )
}

const RenderSearchInput = ({ onSearchQuery, searchQuery }) => {
  return (
    <div className='navbar-search-container'>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => onSearchQuery(e.target.value)}
      />
      <AiOutlineSearch className='navbar-search-icon' color='black' />
    </div>
  )
}

// Main component
function SidebarGallery({
  selectedImageItem,
  onHamburgerMenu,
  onSearchQuery,
  searchQuery,
  onFavoriteGallery,
  onBackArrow,
}) {
  const { data } = useContext(fetchedData)
  const { userName, isMobile, sidebar, renderBackArrow } =
    useContext(globalContext)

  return (
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      {isMobile ? (
        <>
          <RenderUserName userName={userName} prop='navbar-user-mobile' />
          {!renderBackArrow ? (
            <FavoriteIcon onFavoriteGallery={onFavoriteGallery} />
          ) : (
            <BackArrow onBackArrow={onBackArrow} />
          )}
        </>
      ) : null}

      <ul className='nav-menu-items'>
        <RenderToggleButton onHamburgerMenu={onHamburgerMenu} />
        <h1>Image Gallery</h1>
        <RenderSearchInput
          onSearchQuery={onSearchQuery}
          searchQuery={searchQuery}
        />
        {data.length > 0
          ? data.map((item) => (
              <RenderSidebarPictures
                key={item.id}
                item={item}
                selectedImageItem={selectedImageItem}
              />
            ))
          : null}
      </ul>
    </nav>
  )
}

export default SidebarGallery
