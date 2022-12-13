import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../components/ListOfPhotoCard'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => {
  const params = useParams()
  return (
    <Layout title='Practica Platzi'>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={params.id} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, currentProps) => prevProps.id === currentProps.id)
