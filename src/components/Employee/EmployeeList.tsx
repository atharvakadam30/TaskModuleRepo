import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Container, Grid } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IGetEmployeeDetailsBody } from 'src/interfaces/Employee/IEmployee';
import DynamicList from 'src/libraries/Training/DynamicList';
import PageHeader from 'src/libraries/heading/PageHeader';
import { deleteEmployeeDetails, getEmployeeList, resetDeleteEmployeeDetails } from "src/requests/Employee/RequestEmployee";
import { RootState } from 'src/store';

const EmployeeList = ({ ClickItemList }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const EmployeeList = useSelector((state: RootState) => state.Employee.EmployeeList);
    const deleteEmployeedetailsMsg = useSelector((state: RootState) =>
        state.Employee.deleteEmployeedetailsMsg);
    const HeaderList = ["Home", "Birth Date", "Email Id", "Phone No", "Edit", "Delete"]
    const IconList = [
        { Id: 1, Icon: <EditIcon />, Action: 'Edit' },
        { Id: 2, Icon: <CloseIcon />, Action: 'Delete' },
    ];
    useEffect(() => {
        dispatch(getEmployeeList())
    }, [])
    useEffect(() => {
        if (deleteEmployeedetailsMsg != "") {
            toast.success(deleteEmployeedetailsMsg);
            dispatch(resetDeleteEmployeeDetails())
            dispatch(getEmployeeList())
        }
    }, [deleteEmployeedetailsMsg])


    const ClickItem = (value) => {
        if (value.Action == "Delete") {
            if (window.confirm("Are you sure you want to delete this employee?")) {
                const GetEmployeeDetailsBody: IGetEmployeeDetailsBody = {
                    ID: value.Id
                }
                dispatch(deleteEmployeeDetails(GetEmployeeDetailsBody))
            }
        }
        if (value.Action == "Edit") {
            navigate("../AddEmployee/" + value.Id)
        }
        if (value.Action == "Edit") {
            ClickItemList(value.Id)
            navigate("../" + value.Id)
        }
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PageHeader heading={'Employee List'} subheading={''} />
                </Grid>
                <Grid item xs={12}>
                    <DynamicList HeaderList={HeaderList} ItemList={EmployeeList}
                        IconList={IconList} ClickItem={ClickItem} />
                </Grid>
            </Grid>
        </Container >
    )
}

export default EmployeeList