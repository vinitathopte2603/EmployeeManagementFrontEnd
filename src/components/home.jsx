import React, { Component } from 'react'
import { EmpService } from '../service/employeeservice'
import HideAppBar from '../components/title'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Update from '../components/editEmployee'

const empService = new EmpService

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getAllEmployee: [],
      openUpdate:false,
        data:[]
    };
    this.gotoregister = this.gotoregister.bind(this)
    this.deleteEmployee = this.deleteEmployee.bind(this)
    this.forRefresh=this.forRefresh.bind(this)
    this.getAllEmployees=this.getAllEmployees.bind(this)

  }

  componentDidMount() {

   this.getAllEmployees()

  }


  getAllEmployees(){
    empService.getUserAccount().then(response => {
      console.log("response from backend ", response)
      this.setState({
        getAllEmployee: response.data
      })
    }).catch(error => {
      console.log("error from backend ", error)
    });
  }
  deleteEmployee(objectId) {
  console.log(objectId)
    var data = objectId
    empService.deleteUserdata(data).then(res=>{
      this.getAllEmployees()
    })
  }
  forRefresh(){
    console.log("inside for refresh")
    this.setState({openUpdate:!this.state.openUpdate})
    this.getAllEmployees()
  }

  gotoregister() {
    this.props.history.push('/register')
  }
  goToUpdate(object)
  {
    this.setState({openUpdate:!this.state.openUpdate, data:object })
  }

  render() {
 var table2 = this.state.getAllEmployee.map( (object, i) =>{
      return ( 
        <tr>
          <td>
            {object.id}
          </td>
          <td>
            {object.name}
          </td>
          <td>
            {object.email}
          </td>
          <td>
            {object.salary}
          </td>
          <td>
            {object.designation}
          </td>
          <td>
            {object.experience}
          </td>
          <td>
            {object.department}
          </td>
          <td>
            {object.contactNumber}
          </td>
          <td>
            <button className="btn btn-primary"><EditIcon onClick={() => this.goToUpdate(object)} /></button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => this.deleteEmployee(object.id)} margin ><DeleteIcon /></button>
          </td>
        </tr>
      )
    });
    return (
      <div>
        <div>
          <HideAppBar></HideAppBar>
        </div>
  { this.state.openUpdate ?
        (<div>
        <Update object={this.state.data} refresh={this.forRefresh} ></Update>
        </div>):
        (<div>
          <table className="table classes.table" style={{ marginTop: 90, marginLeft: 300 }}>
            <thead>
              <tr>
                <TableCell className="cellbackground">ID</TableCell>
                <TableCell className="cellbackground">Name </TableCell>
                <TableCell className="cellbackground">Email</TableCell>
                <TableCell className="cellbackground">Salary</TableCell>
                <TableCell className="cellbackground">Designation</TableCell>
                <TableCell className="cellbackground">Experience</TableCell>
                <TableCell className="cellbackground">Department</TableCell>
                <TableCell className="cellbackground">Contact</TableCell>
              </tr>
            </thead>
            <tbody>
              {table2}
            </tbody>
          </table>
        </div>
        )}
        <div class="buttonClass">
            <Button variant="contained" color="primary" onClick={this.gotoregister}>Add Employee</Button>
          </div>
      </div>

    )
  }
}
export default Home
