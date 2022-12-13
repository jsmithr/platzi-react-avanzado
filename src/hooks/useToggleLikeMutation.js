import { useMutation } from '@apollo/client'
import { MUTATION_LIKE_PHOTO } from '../query/mutationLikePhoto'

export const useToggleLikeMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MUTATION_LIKE_PHOTO)
  return { mutation, mutationLoading, mutationError }
}
