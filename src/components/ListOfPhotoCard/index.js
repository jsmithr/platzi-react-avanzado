import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_PHOTOS } from '../../query/photos'
import { PhotoCard } from '../PhotoCard'
import { ItemLoading } from './styled'

export const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: { categoryId } })

  if (loading) {
    return (
      <ul>
        {[1, 2, 3].map(i =>
          <ItemLoading key={i} />)}
      </ul>
    )
  }

  if (error) return <p>Error: {error.message} </p>

  return (
    <ul>
      {data.photos.map(photo =>
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>)}
    </ul>
  )
}
