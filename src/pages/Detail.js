import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { PhotoDetail } from '../components/PhotoDetail'

export default ({ detailId }) => {
  const params = useParams()
  return (
    <Layout title='Detalle de la fotografía'>
      <PhotoDetail id={params.id} />
    </Layout>
  )
}
