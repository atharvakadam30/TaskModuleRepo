import { FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { ErrorDetail } from '../styled/ErrormessageStyled';


const RadioList = ({ ItemList, ClickItem, Label, DefaultValue, ErrorMessage = '' }) => {
    console.log(ErrorMessage);

    return (<>
        <Typography>{Label}</Typography>
        <RadioGroup value={DefaultValue} onChange={(e) => ClickItem(e.target.value)} >
            <div>

                {ItemList?.map((Item, i) => {
                    return (

                        <FormControlLabel
                            key={i}
                            value={Item.Value}
                            control={<Radio size="small" />}
                            label={Item.Name}
                        />
                    );
                })}
            </div>
        </RadioGroup>
        <ErrorDetail>{ErrorMessage}</ErrorDetail>
    </>)
}

export default RadioList