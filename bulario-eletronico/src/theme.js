import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontWeight: 'bold',
                    fontSize: '32px'
                },
                body1: {
                    fontFamily: 'Roboto, sans-serif'
                }
            }
        }
    }
})

export default theme