import { useQuery } from '@apollo/client'
import { getSinglePhoto } from '../query/singlePhoto'

export const useGetSinglePhoto = (id) => {
  const { loading, error, data } = useQuery(getSinglePhoto, { variables: { id } })

  return { loading, error, data }
}
