import { useEffect, useState } from 'react'

export const useCategories = () => {
  const [categories, setCategoires] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [showFixed, setShowFixed] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-jsmithr.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategoires(response)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  return { categories, showFixed, loading }
}
