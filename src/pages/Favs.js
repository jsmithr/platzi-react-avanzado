import React from 'react'
import { useGetFavorite } from '../hooks/useGetFavorite'
import { ListOfFavs } from '../components/ListOfFavs'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/Layout'

export default () => {
  const navgiate = useNavigate()
  const { data, error, loading } = useGetFavorite()
  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    navgiate('/login')
    return (
      <div>Error</div>
    )
  }

  const { favs } = data

  return (
    <Layout title='Favs - Practica Platzi'>
      <ListOfFavs data={favs} />
    </Layout>
  )
}
