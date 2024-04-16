import Search from './components/Search'
import Cards from './components/Cards'
import TemplateDefault from './templates/Default'
import { Grid } from '@mui/material'

function App() {
  return (
    <TemplateDefault>
      <Search />
      <Grid container justifyContent={'center'}>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
        <Grid item lg={3} sm={12}>
          <Cards /> 
        </Grid>
      </Grid>
    </TemplateDefault>
  )
}

export default App
