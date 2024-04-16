import Pagination from '@mui/material/Pagination'
import { Box } from '@mui/material'

const BasicPagination = () => {
  return (
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px'
      }}>
          <Pagination count={10} color="primary" />
      </Box>
  )
}

export default BasicPagination