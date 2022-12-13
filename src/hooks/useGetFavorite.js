import { useQuery } from '@apollo/client'
import { GET_FAVORITES } from '../query/favorites'

export const useGetFavorite = (id) => {
  const { loading, error, data } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })

  return { loading, error, data }
}
