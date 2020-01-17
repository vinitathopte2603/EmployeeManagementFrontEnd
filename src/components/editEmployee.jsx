import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HideAppBar from '../components/title'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { EmpService } from '../service/employeeservice'
import Home from '../components/home'

var getdata = new EmpService()

class Update extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      salary: '',
      designation: '',
      experience: '',
      department: '',
      contactNumber: '',
      refreshPage: false
    };

    this.updatedata = this.updatedata.bind(this)
    this.onchange = this.onchange.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    console.log(this.props)
  }
  updatedata() {
    // console.log(this.state);
    var data = {
      id: this.state.id,
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      salary: this.state.salary,
      designation: this.state.designation.trim(),
      experience: this.state.experience,
      department: this.state.department.trim(),
      contactNumber: this.state.contactNumber,

    }

    getdata.updateUserData(data).then(response => {
      console.log(" response in ", response);
      this.props.refresh();

    })
  }
  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }
  refreshPage() {
    this.setState({ refreshPage: !this.state.refreshPage })
  }
  componentDidMount() {


    this.setState({
      id: this.props.object.id,
      name: this.props.object.name,
      email: this.props.object.email,
      salary: this.props.object.salary,
      designation: this.props.object.designation,
      experience: this.props.object.experience,
      department: this.props.object.department,
      contactNumber: this.props.object.contactNumber
    })
  }
  render() {
    console.log(this.props.object)
    return (
       <div className="demo1">
     
            <Card className="card" style={{ width: "45%", height: "100%" }} >

              <form noValidate autoComplete="off" style={{ width: "100%" }}>
                {/* <div className="demo"> */}

                <div className="spacing" >
                  <TextField id="outlined-basic" label="Id" name="id" value={this.state.id} onChange={this.onchange} />
                  <TextField id="outlined-basic" label="Name" name="name" value={this.state.name} onChange={this.onchange} />

                </div>
                <div className="spacing">
                  <TextField id="outlined-basic" label="Email" name="email" value={this.state.email} onChange={this.onchange} />
                  <TextField id="outlined-basic" label="Salary" name="salary" value={this.state.salary} onChange={this.onchange} />

                </div>
                <div className="spacing">
                  <TextField id="outlined-basic" label="Designation" name="designation" value={this.state.designation} onChange={this.onchange} />
                  <TextField id="outlined-basic" label="Experience" name="experience" value={this.state.experience} onChange={this.onchange} />

                </div>
                <div className="spacing">
                  <TextField id="outlined-basic" label="Department" name="department" value={this.state.department} onChange={this.onchange} />
                  <TextField id="outlined-basic" label="Contact" name="contactNumber" value={this.state.contactNumber} onChange={this.onchange} />
                </div>
                <div className="addbutton">
                  <Button variant="contained" color="primary" onClick={this.updatedata} >Update</Button>
                </div>
                {/* </div> */}
              </form>
            </Card>
        
       </div>

    )
  }
}

export default Update