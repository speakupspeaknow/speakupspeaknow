import React, { useState, useEffect } from 'react'

function Graph() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  useEffect(() => {
    const runCall = async () => {
      let apiValue = await fetchData()
      console.log(apiValue)
      // const header = apiValue.split( )
    }
    const fetchData = async () => {
      const requestOption = {
        method: 'GET',
        redirect: 'follow',
      }

      const apiUrl = `https://github.com/speakupspeaknow/speakupspeaknow/blob/master/CityBudgetDownload%20-%20Sheet1.csv`

      try {
        const response = await fetch(apiUrl, requestOption)
        return response.ok ? response.text() : null
      } catch (err) {
        console.log(err)
        return null
      }
    }
    runCall()
  }, [])

  return
}

export default Graph
