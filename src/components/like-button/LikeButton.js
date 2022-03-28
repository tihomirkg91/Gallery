import React, { useContext } from 'react'

// Style
import LikeButtonStyle from './LikeButtonStyle.scss'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'

// Context
import { globalContext } from '../../stateContext/stateContexts'

function LikeButton({ onLikeButton }) {
  const { like } = useContext(globalContext)

  return (
    <div className='like-button-container' onClick={onLikeButton}>
      {like ? (
        <AiFillLike className='like-icon' />
      ) : (
        <AiOutlineLike className='like-icon' />
      )}
    </div>
  )
}

export default LikeButton
