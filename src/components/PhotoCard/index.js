import React from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { useObserver } from '../../hooks/useObserver'
import { FavButton } from '../FavButton'
import { usePhotoCard } from '../../hooks/usePhotoCard'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://www.sharlenecalzature.it/wp-content/uploads/2020/09/load4.gif'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { show, element } = useObserver()
  const { handleFavClick } = usePhotoCard(id)

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt={`image-pet-${id}`} />
              </ImgWrapper>
            </Link>
            <FavButton likes={likes} liked={liked} onClick={handleFavClick} />
          </>
      }
    </Article>
  )
}
