import React, { useContext } from 'react'

// Style
import BackArrowStyle from './BackArrowStyle.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai'

// Context
import { globalContext } from '../../stateContext/stateContexts'

function BackArrow({ onBackArrow }) {
  const { isMobile } = useContext(globalContext)

  const DesktopVersionArrow = () => {
    return (
      <div className='arrow-container' onClick={onBackArrow}>
        <AiOutlineArrowLeft className='icon-back' />
        <p>Back</p>
      </div>
    )
  }

  const MobileVersionArrow = () => {
    return (
      <div className='arrow-container-mobile' onClick={onBackArrow}>
        <AiOutlineArrowLeft className='icon-back-mobile' />
        <p>Back</p>
      </div>
    )
  }

  return isMobile ? <MobileVersionArrow /> : <DesktopVersionArrow />
}

export default BackArrow
