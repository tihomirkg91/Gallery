import React, { useContext } from 'react'

// Style
import CommentStyle from './CommentStyle.scss'

// Context
import { globalContext } from '../../stateContext/stateContexts'

function AddComment({ onCommentWrite }) {
  const { comment } = useContext(globalContext)

  return (
    <div className='comment-container'>
      <input
        type='text'
        onChange={(e) => onCommentWrite(e.target.value)}
        value={comment}
        placeholder='your comment'
      />
    </div>
  )
}

export default AddComment
