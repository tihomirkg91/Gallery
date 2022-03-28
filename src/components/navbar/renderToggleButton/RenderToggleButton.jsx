import { FaBars } from 'react-icons/fa'

export const RenderToggleButton = ({ onHamburgerMenu }) => {
  return (
    <div className='menu-container' onClick={onHamburgerMenu}>
      <FaBars className='menu-icon' />
    </div>
  )
}
