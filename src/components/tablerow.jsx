
import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {EmpService} from '../service/employeeservice'

var service = new EmpService()
class TableRow extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state={
      id:'',
      openUpdate:false
    }
    this.gotoupdate=this.gotoupdate.bind(this)
  }
  deleteEmployee(param){
console.log(param)
    this.setState({id:this.props.obj.id});
    var data=param.id
    service.deleteUserdata(data)
  }
  gotoupdate(){
    console.log(" gobto update",this.props)
    // this.props.obj.push('/update')
    // this.props.simplifiedFunction()
  // this.setState({ openUpdate:!this.state.openUpdate })
  // console.log(" setstate ",this.state)
}
  render() {
    return (
      
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.salary}
          </td>
          <td>
            {this.props.obj.designation}
          </td>
          <td>
            {this.props.obj.experience}
          </td>
          <td>
            {this.props.obj.department}
          </td>
          <td>
            {this.props.obj.contact}
          </td>
          <td>
            <button className="btn btn-primary" onClick={this.gotoupdate}><EditIcon/></button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={()=> this.deleteEmployee(this.props.obj)} ><DeleteIcon/></button>
          </td>
        </tr>
        
    
    );
  }
}

export default TableRow;