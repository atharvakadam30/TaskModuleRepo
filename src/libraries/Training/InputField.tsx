import { TextField, Typography } from '@mui/material'
import { ErrorDetail } from '../styled/ErrormessageStyled'

const InputField = ({ Item, Label, ErrorMessage = ''
    , ClickItem, BlurItem = undefined, KeyPressItem = undefined }) => {

    return (<>
        <Typography>{Label}</Typography>
        <TextField value={Item}
            onChange={(e) => { ClickItem(e.target.value) }}
            onBlur={BlurItem} required />
        <ErrorDetail>{ErrorMessage}</ErrorDetail>
    </>
    )
}

export default InputField