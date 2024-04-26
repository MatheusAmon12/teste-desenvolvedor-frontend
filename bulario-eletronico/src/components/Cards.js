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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '7px',
            background: '#FAFAFA',
            boxShadow:  '5px 5px 9px #d0d0d0, -5px -5px 9px #f0f0f0',
            marginTop: '40px',
        },
        title: {
            overflowWrap: 'break-word'
        }
    }
})

const OutlinedCard =  ({ name, company, published, onClick }) => {
    const { classes } = useStyles()

  return (
    <Box 
        sx={{ width: 160, height: 220 }}
        className={classes.box}
    >
        <CardContent>
            <Typography 
                variant="body" 
                fontWeight={'bold'}
                fontSize={'12px'}
                component="div"
                className={classes.title}
            >
                {name}
            </Typography>
            <Typography 
                sx={{ fontSize: 10 }} 
                color="text.secondary" 
                gutterBottom
            >
                {company}
            </Typography>
            <Typography 
                sx={{ fontSize: 10 }} 
                color="text.secondary" 
                gutterBottom
            >
                {published}
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
                size="small" 
                onClick={onClick} 
                endIcon={<DownloadIcon />}
            >
                Bula
            </Button>
        </CardActions>
    </Box>
  )
}

export default OutlinedCard