import { Grid } from '@mui/material'
import Search from './components/Search'
import Cards from './components/Cards'
import TemplateDefault from './templates/Default'
import Pagination from './components/Pagination'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const requestApi = async() => {
      const response = await axios("http://localhost:3333/data")
      setData(response.data)
      console.log(response.data)
    }

    requestApi()
  }, [])

  return (
    <TemplateDefault>
      <Search />
      <Grid container justifyContent={'center'}>
        {
          data.map((item) => (
            <Grid item lg={3} sm={12}>
              <Cards
                name={item.name}
                company={item.company}
              /> 
            </Grid>
          ))
        }
      </Grid>
      <Pagination />
    </TemplateDefault>
  )
}

export default App
