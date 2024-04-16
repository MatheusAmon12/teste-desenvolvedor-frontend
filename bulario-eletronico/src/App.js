import { Grid } from '@mui/material'
import { Pagination, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from 'tss-react/mui'

import Search from './components/Search'
import Cards from './components/Cards'
import TemplateDefault from './templates/Default'

const useStyles = makeStyles()(() => {
  return{
    box: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '40px'
    }
  }
})

function App() {
  const { classes } = useStyles()

  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const numberOfPages = Math.ceil(items.length / 10)

  const initialIndexPage = currentPage * 10

  const currentItems = items.slice(initialIndexPage, initialIndexPage + 10)

  const handleChange = (event, value) => {
    setCurrentPage(value - 1)
  }

  useEffect(() => {
    const requestApi = async() => {
      const response = await axios("http://localhost:3333/data")
      setItems(response.data)
      console.log(response.data)
    }

    requestApi()
  }, [])

  return (
    <TemplateDefault>
      <Search />
      <Grid container justifyContent={'center'}>
        {
          currentItems.map((item) => (
            <Grid item lg={3} sm={12} key={item.id}>
              <Cards
                name={item.name}
                company={item.company}
              /> 
            </Grid>
          ))
        }
      </Grid>
      <Box className={classes.box}>
        <Pagination 
          color={'primary'} 
          count={numberOfPages} 
          page={currentPage + 1} 
          onChange={handleChange} 
        />
      </Box>
    </TemplateDefault>
  )
}

export default App
