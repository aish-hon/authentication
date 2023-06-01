import {useState} from "react";
import {Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const EmpCreate = () => {

    const[id,idchange]=useState("");
    const [username, usernamechange] = useState("");
    const[name,namechange]=useState("");
    const[password,passwordchange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);

   
    const navigate=useNavigate();

    

    const handlesubmit=(e)=>{
        e.preventDefault();
        let empdata={id,name,password,email,phone};
        

        fetch("http://localhost:3006/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(empdata)
            }).then((res) => {
                toast.success('saved successfully.')
                navigate('/emplisting');
                
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{backgroundColor:"grey", "textAlign": "left" }}>
                            <div className="card-title" style={{'textAlign':'center'}}>
                                <h2>Employee create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                
                            <div className="col-lg-12">
                                <div className="form-group">
                                    {/*creating controlls*/}
                                    <label><b>ID </b><span className="errmsg">*</span></label>
                                    <input value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>Name</b></label>
                                            <input value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>password</b></label>
                                            <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>Email</b></label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>Phone</b></label>
                                            <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label"><b>Is Active</b></label>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/emplisting" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmpCreate;