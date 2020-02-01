import React, { useEffect, useState, Fragment } from 'react'
import { getDataFromApi } from '../utils'
import Table from './Table'

const Formator = () => {
  const [data, setData] = useState()

  useEffect(() => {
    getDataFromApi('/data/json7.json')
      .then(res => setData(res))
  }, [])

  if (!data) return null

  let main = (
    <div id='table_wrapper'>
      <Table data={data}/>
    </div>
  )

  return main
}

export default Formator