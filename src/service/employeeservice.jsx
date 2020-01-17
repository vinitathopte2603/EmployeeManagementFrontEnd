import axios from 'axios'


export class EmpService {
  getUserAccount() {
    return axios.get("http://localhost:60404/api/Employee/getAllEmployee");
  }
  addUserData(data) {
    console.log("hgdg", data)
    return axios.post(`http://localhost:60404/api/Employee/postEmployee`, data, {
      headers: {
        'Content-Type': 'application/json' }})
  }
  deleteUserdata(id) {
    console.log("id in the service", id)
    return axios.delete("http://localhost:60404/api/Employee/deleteEmployee/" + id)
  }
  displayEmployee(id){
    console.log("id in the service",id)
    return axios.get("http://localhost:60404/api/Employee/display"+id)
  }
  updateUserData(data){
    console.log("jygvyh", data)
    return axios.put("http://localhost:60404/api/Employee",data,
    {headers:{'Content-Type': 'application/json'}})
  }
}
