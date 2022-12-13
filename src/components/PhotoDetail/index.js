import React from 'react'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto'
import { PhotoCard } from '../PhotoCard'
import { LoadPhoto } from './style'

export const PhotoDetail = ({ id }) => {
  const { loading, data } = useGetSinglePhoto(id)

  if (loading) return <LoadPhoto />

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}
