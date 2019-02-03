import { useState, useEffect } from "react"
import axios from "axios"

function useHook({ url, method, options }) {
  const [results, setResults] = useState({
    response: null,
    error: null,
    loading: true,
  })

  useEffect(() => {
    axios({
      url,
      method,
      ...options,
    })
      .then(response => setResults({ response, error: null, loading: false }))
      .catch(error => setResults({ response: null, error, loading: false }))
  }, [])

  return results
}

export default useHook
