import { Button } from '@mui/material';

const ButtonField = ({ ClickItem, Label }) => {
    return (<>
        <Button variant="contained" onClick={ClickItem}>{Label}</Button>
    </>)
}

export default ButtonField
