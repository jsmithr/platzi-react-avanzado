import React from 'react'
import { Image, Link, Text } from './styles'

const DEFAULT_IMAGE = 'https://www.sharlenecalzature.it/wp-content/uploads/2020/09/load4.gif'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?', name = '', loading = false }) => (
  <Link to={path}>
    <Image src={cover} loading={loading} alt={name} />
    {/* <span>{emoji}</span> */}
    <Text>{name}</Text>
  </Link>
)
