import React from 'react';
import logo from './logo2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const SignUp = () => {
    const [userLogin, setUserLogin] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 py-5">
                        <div className="text-center py-5">
                            <Link to="/">
                                <img className="w-75" src={logo} alt=""/>
                            </Link>
                        </div>
                       { userLogin ? 
                       <form action="#">
                            <input className="form-control my-3 p-3 bg-light border-0" type="text" name="name" id="name" placeholder="Name" required/>
                            <input className="form-control my-3 p-3 bg-light border-0" type="email" name="email" id="email" placeholder="Email" required/>
                            <input className="form-control my-3 p-3 bg-light border-0" type="password" name="pass" id="pass" placeholder="Password" required/>
                            <input className="form-control my-3 p-3 bg-light border-0" type="password" name="pass" id="pass" placeholder="Confirm Password" required/>
                            <input className="form-control my-3 bg-danger text-light border-0" type="submit" value="Sign Up"/>
                            <p className="py-3 text-danger text-center" style={{cursor: 'pointer'}} onClick={()=> setUserLogin(false)}>Already have an account</p>
                        </form>
                        :

                        <form action="#">                            
                            <input className="form-control my-3 p-3 bg-light border-0" type="email" name="email" id="email" placeholder="Email" required/>
                            <input className="form-control my-3 p-3 bg-light border-0" type="password" name="pass" id="pass" placeholder="Password" required/>                           
                            <input className="form-control my-3 bg-danger text-light border-0" type="submit" value="Sign In"/>
                            <p className="py-3 text-danger text-center" style={{cursor: 'pointer'}} onClick={()=> setUserLogin(true)}>Create a new account</p>
                        </form>
                        }
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SignUp;