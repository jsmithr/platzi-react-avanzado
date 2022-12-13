import { useState } from 'react'

export const useLocalStorage = (key, initValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initValue
    } catch (error) {
      console.log('setLocalStorage ~ error', error)
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (e) {
      console.log('setLocalStorage ~ e', e)
    }
  }

  return [storedValue, setLocalStorage]
}
