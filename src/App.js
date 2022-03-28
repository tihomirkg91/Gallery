import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { APIKEY } from './key/apiKey'

// Context
import { globalContext, fetchedData } from './stateContext/stateContexts'

// Components
import LoginPage from './components/login-page/LoginPage'
import GalleryPage from './components/gallery-page/GalleryPage'
import Navbar from './components/navbar/Navbar'
import SidebarGallery from './components/sidebar-gallery/SidebarGallery'
import FavoriteGallery from './components/favorite-gallery/FavoriteGallery'

const App = () => {
  const navigate = useNavigate()

  //State for application
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [searchQuery, setSearchQuery] = useState('sun')
  const [data, setData] = useState([])
  const [sidebar, setSidebar] = useState(false)
  const [userLogin, setUserLogin] = useState(false)
  const [selectedImage, setSelectedImage] = useState()
  const [favorite, setFavorite] = useState(false)

  const [isMobile, setIsMobile] = useState(true)
  const [comment, setComment] = useState('')
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  const [renderBackArrow, setRenderBackArrow] = useState(false)
  const [like, setLike] = useState(false)

  //Helpers to render Mobile or Desktop version
  const mobileVersion = () => {
    setSidebar(false)
    setIsMobile(true)
  }

  const desktopVersion = () => {
    setIsMobile(false)
    if (userLogin) {
      setSidebar(true)
    }
  }

  // initial data fetch cleanUp
  useEffect(() => {
    const initialQueryCleanUp = setTimeout(() => {
      setSearchQuery('')
    }, 1000)

    return () => clearTimeout(initialQueryCleanUp)
  }, [])

  // Initial display
  useEffect(() => {
    if (screenSize > 720) {
      desktopVersion()
    } else mobileVersion()
  }, [userLogin])

  // checking for width change and display mobile or desktop
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 720) {
        desktopVersion()
      } else mobileVersion()
    }
    window.addEventListener('resize', checkScreenSize)
    setScreenSize(window.innerWidth)
    return () => window.removeEventListener('resize', checkScreenSize)
  })

  // fetch data on search query
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${searchQuery}`,
          {
            headers: {
              Authorization: APIKEY,
            },
          }
        )

        setData(response.data.photos)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [searchQuery])

  // Form Submit
  const onFormSubmit = useCallback((e) => {
    e.preventDefault()
    if (userEmail.length > 3 && userPassword.length > 3) {
      setUserLogin(!userLogin)
      navigate('/galleryPage')
    }
  })

  // Handling events in components
  const onUserEmail = useCallback((e) => setUserEmail(e))

  const onUserName = useCallback((e) => setUserName(e))

  const onUserPassword = useCallback((e) => setUserPassword(e))

  const onSearchQuery = useCallback((e) => setSearchQuery(e))

  const onHamburgerMenu = useCallback(() => setSidebar(!sidebar))

  const addToSelectedItem = (item) => {
    item.comment = { comment }
  }

  const selectedImageItem = useCallback((item) => {
    setSelectedImage(item)
    addToSelectedItem(item)
    if (isMobile) {
      setSidebar(false)
    }
  })

  const onLogOutUser = useCallback(() => {
    setUserLogin(false)
    setUserPassword('')
    setUserEmail('')
    setUserName('')
    navigate('/')
    setSearchQuery('')
    setSidebar(false)
  })

  const onFavoriteGallery = () => {
    navigate('/favoriteGallery')
    setRenderBackArrow(true)
    // if (isMobile) setSidebar(!sidebar)
  }

  const onBackArrow = () => {
    navigate('/galleryPage')
    setRenderBackArrow(false)
    // if (isMobile) setSidebar(!sidebar)
  }

  const onLikeButton = () => {
    setLike(!like)
  }

  const onCommentWrite = (letters) => {
    setComment(letters)
  }

  return (
    <fetchedData.Provider value={{ data }}>
      <globalContext.Provider
        value={{
          userEmail,
          userPassword,
          userName,
          isMobile,
          sidebar,
          userLogin,
          favorite,
          renderBackArrow,
          like,
          comment,
        }}
      >
        <Navbar
          onLogOutUser={onLogOutUser}
          onFavoriteGallery={onFavoriteGallery}
          onHamburgerMenu={onHamburgerMenu}
          onBackArrow={onBackArrow}
        />

        <SidebarGallery
          onHamburgerMenu={onHamburgerMenu}
          selectedImageItem={selectedImageItem}
          searchQuery={searchQuery}
          onSearchQuery={onSearchQuery}
          onFavoriteGallery={onFavoriteGallery}
          onBackArrow={onBackArrow}
        />

        <Routes>
          <Route
            path='/'
            element={
              <LoginPage
                onFormSubmit={onFormSubmit}
                onUserEmail={onUserEmail}
                onUserPassword={onUserPassword}
                onUserName={onUserName}
              />
            }
          />

          <Route
            path='/galleryPage'
            element={
              <GalleryPage
                onSearchQuery={onSearchQuery}
                selectedImage={selectedImage}
                onLikeButton={onLikeButton}
                onCommentWrite={onCommentWrite}
              />
            }
          />

          <Route path='/favoriteGallery' element={<FavoriteGallery />} />
        </Routes>
      </globalContext.Provider>
    </fetchedData.Provider>
  )
}

export default App
