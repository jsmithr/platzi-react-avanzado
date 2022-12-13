import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './style'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (

    <Button onClick={onClick}>
      <Icon size='24px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
