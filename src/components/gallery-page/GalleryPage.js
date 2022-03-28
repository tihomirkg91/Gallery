import React, { useContext } from 'react'

// Style
import GalleryPageStyled from './GalleryPageStyled.scss'

// Components
import LikeButton from '../like-button/LikeButton'
import AddComment from '../add-comment/AddComment'

// Helper component will render in main component
const RenderGalleryPage = ({ selectedImage, onLikeButton, onCommentWrite }) => {
  return (
    <div className='gallery-container'>
      <img
        src={selectedImage.src.landscape}
        alt='selectedImage.alt'
        className='selected-img'
      />
      <h4>{selectedImage.photographer}</h4>
      <LikeButton onLikeButton={onLikeButton} className='like-button' />
      <AddComment onCommentWrite={onCommentWrite} />
    </div>
  )
}

const DefaultImageText = () => {
  return (
    <div className='gallery-container'>
      <p>Review image to show here...</p>
    </div>
  )
}

// Main component
const GalleryPage = ({ selectedImage, onLikeButton, onCommentWrite }) => {
  if (selectedImage) {
    return (
      <RenderGalleryPage
        selectedImage={selectedImage}
        onLikeButton={onLikeButton}
        onCommentWrite={onCommentWrite}
      />
    )
  }
  if (!selectedImage) {
    return <DefaultImageText />
  }
}

export default GalleryPage
