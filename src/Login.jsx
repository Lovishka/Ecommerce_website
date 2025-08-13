import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import * as Yup from "yup";
function Login()
{
    const[log,setLog]=useState(false)

    function callApi(values)
    {
        console.log("email",values.email,"password",values.Mypassword);
        setLog(true);
    }

    const schema=Yup.object().shape({
        email:Yup.string().email().required(),
        Mypassword:Yup.string().min(8).required(),

    });
    const {handleSubmit , handleChange, resetForm,values, errors,handleBlur,touched,isValid,dirty }=
    useFormik({

        initialValues:{
            email:"",
            Mypassword:"",
        },
        onSubmit:callApi,
        validationSchema:schema,
    });



  return (
    
    <div>
        <form className="min-h-[calc(100vh-160px)] flex flex-col justify-center items-center bg-blue-900" onSubmit={handleSubmit}> 
    <BiCart  className="text-9xl  text-white" />
    <div className="gap-5 flex flex-col mt-10">
     <label htmlFor="My-email" className="sr-only">Email</label>
     <input 
     placeholder="Username" 
     value={values.email}
     onChange={handleChange}
     onBlur={handleBlur}
     name="email"
     type="email"
     id="email"
     autoComplete="email"
     className="border-1 w-80 h-10 text-white border-white"
     ></input>
     {touched.email && errors.email && <div className="text-red-500">{errors.email}</div>}
     <label htmlFor="Mypassword" className="sr-only">Password</label>
     <input 
     placeholder="Password" 
     value={values.Mypassword}
     onChange={handleChange}
     onBlur={handleBlur}
     name="Mypassword"
     type="password"
     id="Mypassword"
     autoComplete="current-password"
     className="border-1 w-80 h-10  text-white border-white"
     ></input>
      {touched.Mypassword && errors.Mypassword  && <div className="text-red-500">{errors.Mypassword}</div>}
    {!log && <button type={"button"}  onClick={resetForm} className="bg-white text-blue-900 w-80 h-10 text-2xl font-bold">Reset</button>}
     {!log && <button type={"submit"} className="bg-white text-blue-900 w-80 h-10 text-2xl font-bold disabled:bg-gray-400" disabled={!isValid || !dirty}>Login</button>}
     </div>
     {log && <div className="text-2xl text-white font-bold m-2 ">Login Successful!</div>}
     {!log && 
     <div className="flex flex-col">
        <a className="text-white ml-54 text-sm">Forgot Password?</a>
      <Link to="/SignUp" className="text-white ml-52 text-sm">New User?Sign Up!</Link>
     </div> }
    </form>
      </div>
)

}
export default Login;
