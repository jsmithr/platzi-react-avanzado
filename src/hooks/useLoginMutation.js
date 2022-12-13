import { useMutation } from '@apollo/client'
import { LOGIN } from '../query/mutationLogin'

export const useLoginMutation = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN)
  return [{ data, loading, error }, loginMutation]
}
