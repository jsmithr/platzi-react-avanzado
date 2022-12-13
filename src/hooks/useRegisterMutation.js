import { useMutation } from '@apollo/client'
import { REGISTER } from '../query/mutationRegisterUser'

export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER)
  return [{ data, loading, error }, registerMutation]
}
