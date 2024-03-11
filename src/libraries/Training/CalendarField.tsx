import { TextField, Typography } from '@mui/material'
import { ErrorDetail } from '../styled/ErrormessageStyled'

const CalendarField = ({ Item, ClickItem, Label, ErrorMessage = '' }) => {
    return (<>
        <Typography>{Label}</Typography>
        <TextField value={Item} type='date'
            onChange={(e) => { ClickItem(e.target.value) }} />
        <ErrorDetail>{ErrorMessage}</ErrorDetail>
    </>)
}

export default CalendarField