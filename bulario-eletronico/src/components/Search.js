import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


const Search = ({ value, onChange }) => {
    return(
        <TextField
            value={value} 
            size='small' 
            fullWidth 
            variant='outlined'
            onChange={onChange}
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