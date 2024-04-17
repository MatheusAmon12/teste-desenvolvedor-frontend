import { Grid } from '@mui/material'
import { Pagination, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from 'tss-react/mui'

import Search from './components/Search'
import Cards from './components/Cards'
import TemplateDefault from './templates/Default'
import InputRadio from './components/InputRadio'

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
  const [searchValue, setSearchValue] = useState('')
  const [searchRadioValue, setSearchRadioValue] = useState('name')
  const [currentPage, setCurrentPage] = useState(0)

  const numberOfPages = Math.ceil(items.length / 10)

  const initialIndexPage = currentPage * 10

  const currentItems = items.slice(initialIndexPage, initialIndexPage + 10)
  const currentItemsSorted = currentItems.slice().sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  )

  const handleChange = (event, value) => {
    setCurrentPage(value - 1)
  }

  const handleChangeInput = (e) => {
    const value = e.target.value
    setSearchValue(value)
  }

  const handleChangeRadioInput = (e) => {
    const value = e.target.value
    console.log(value)
    setSearchRadioValue(value)
  }

  const handleClickDownload = (pdf) => {
    console.log("Este é o pdf", pdf)
    window.open(pdf, '_blank')
  }

  useEffect(() => {
    try{
      if(searchRadioValue === 'name'){
        const requestApi = async() => {
          const response = await axios(
            `
              http://localhost:3000/data?${searchRadioValue}_like=${searchValue.toUpperCase()}
            `
          )
          setItems(response.data)
        }
        
        requestApi()
  
      } else if(searchRadioValue === 'company'){
        const requestApi = async() => {
          const response = await axios(
            `
              http://localhost:3000/data?${searchRadioValue}_like=${searchValue.toUpperCase()}
            `
          )
          setItems(response.data)
        }
        requestApi()
      }
    } catch(error){
      
    }

  }, [searchValue, searchRadioValue])

  return (
    <TemplateDefault>
      <Search value={searchValue} onChange={e => handleChangeInput(e)} />
      <InputRadio onChange={handleChangeRadioInput} />
      <Grid container justifyContent={'center'} spacing={'24px'}>
        {
          currentItemsSorted.map((item) => (
            <Grid item md={3} sm={6} key={item.id}>
              <Cards
                name={item.name}
                company={item.company}
                published={new Date(item.published_at).toLocaleString('pt-BR')}
                onClick={() => handleClickDownload(item.documents[0].url)}
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
