import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {

    const[empdata,empdatachange]=useState(null);
    const navigate=useNavigate();

    const LoadDetail=(id)=>{
       navigate('/employee/detail/'+id);
    }

    const LoadEdit=(id)=>{
        navigate("/employee/edit/" + id);

    }

    const RemoveFunction=(id)=>{
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3006/user/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }

    }

    useEffect(()=>{
        fetch(" http://localhost:3006/user").then((res)=>{
            return res.json();
         }).then((resp)=>{
            empdatachange(resp);
         }).catch((err)=>{
            console.log(err.message);
         })
    },[])
    return ( 
        <div className="container">
        
             <div style={{backgroundColor:"blue",width:60,marginLeft:"95%"}}>
                <Link to={'/'}>Logout</Link>
    </div>
            <div className="card" style={{backgroundColor:""}}>
                <div className="card-title" style={{backgroundColor:"#C0C0C0"}}>
                    <h2>Employee Listing</h2>
                </div>

                <div className="card-body" style={{backgroundColor:"#C0C0C0"}}>
                    <div className="divbtn">
                        <Link to="/empcreate" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered" style={{backgroundColor:"grey"}}>
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                {/*bind the table body make ,use of conditional template*/}
                        <tbody>
                            { empdata &&
                           empdata.map(user => (
                            <tr key={user.id}>
                                <td><b>{user.id}</b></td>
                                <td><b>{user.name}</b></td>
                                <td><b>{user.email}</b></td>
                                <td><b>{user.phone}</b></td>
                                
                                <td>
                                <a onClick={()=>{LoadEdit(user.id)}} className="btn btn-success">Edit</a>
                                <a onClick={()=>{RemoveFunction(user.id)}} className="btn btn-danger">Remove</a>
                                <a onClick={()=>{LoadDetail(user.id)}} className="btn btn-primary">Details</a>
                                
                                
                                </td>
                            </tr>
                           

                              ))
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default EmpListing;