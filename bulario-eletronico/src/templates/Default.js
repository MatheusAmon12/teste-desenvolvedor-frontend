import { Container, Typography } from '@mui/material'

const TemplateDefault = ({ children }) => {
    return(
        <Container 
        maxWidth='md'
        disableGutters
        style={{
            padding: "80px",
        }}
        >
            <Typography 
                variant='h1'
                textAlign={'center'}
                marginBottom={'24px'}
            >
                Bulário Eletrônico
            </Typography>
            {children}
        </Container>
    )
}

export default TemplateDefault