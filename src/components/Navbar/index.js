import React from 'react'
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md'
import { Link, Nav } from './styles'

export const Navbar = () => {
  const ICON_SIZE = '24px'
  return (
    <Nav>
      <Link end to='/'>
        <MdHome size={ICON_SIZE} />
      </Link>
      <Link end to='/favs'>
        <MdFavoriteBorder size={ICON_SIZE} />
      </Link>
      <Link end to='/user'>
        <MdPersonOutline size={ICON_SIZE} />
      </Link>
    </Nav>
  )
}
