import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@mui/material'

const InputRadio = ({ onChange }) => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Pesquisar por:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue={'name'}
        onChange={onChange}
      >
        <FormControlLabel value="name" control={<Radio />} label="Medicamento" />
        <FormControlLabel value="company" control={<Radio />} label="Farmácia" />
      </RadioGroup>
    </FormControl>
  )
}

export default InputRadio