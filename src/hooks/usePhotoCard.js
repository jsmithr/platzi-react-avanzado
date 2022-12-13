import { useNavigate } from 'react-router-dom'
import { useToggleLikeMutation } from './useToggleLikeMutation'

export const usePhotoCard = (id) => {
  const { mutation, mutationError } = useToggleLikeMutation()
  const navigate = useNavigate()

  const handleFavClick = () => {
    mutation({ variables: { input: { id } } })
  }

  if (mutationError) {
    navigate('/login')
  }

  return { handleFavClick }
}
