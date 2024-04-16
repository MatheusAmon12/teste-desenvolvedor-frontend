import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


const Search = () => {
    return(
        <TextField 
            size='small' 
            fullWidth 
            variant='outlined'
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    )
}

export default Search