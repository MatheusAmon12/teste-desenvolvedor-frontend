import * as React from 'react'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DownloadIcon from '@mui/icons-material/Download'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return{
        box: {
            borderRadius: '7px',
            background: '#FAFAFA',
            boxShadow:  '5px 5px 9px #d0d0d0, -5px -5px 9px #f0f0f0',

            marginTop: '40px',
        }
    }
})

const OutlinedCard =  () => {
    const { classes } = useStyles()

  return (
    <Box 
        sx={{ width: 275 }}
        className={classes.box}
    >
      <CardContent>
        <Typography 
            variant="h5" 
            fontWeight={'bold'} 
            component="div"
        >
            AMOXICILINA
        </Typography>
        <Typography 
            sx={{ fontSize: 10 }} 
            color="text.secondary" 
            gutterBottom
        >
            MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" endIcon={<DownloadIcon />}>Bula</Button>
    </CardActions>
    </Box>
  )
}

export default OutlinedCard