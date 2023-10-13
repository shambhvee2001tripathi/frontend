import React from 'react'
import Swal from 'sweetalert2';
// import useAppContext from '../AppContext';

import { useFormik } from 'formik';


const Login = () => {

  // const { setLoggedin } = useAppContext();
  //to get all things of setloggedin in the login


  const loginForm = useFormik({
    initialValues: {
    
      email: '',
      password: '',

    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method :'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          tittle : 'Login Success',
          text : 'Welldone'
        })
        // setLoggedin(true);
         const data = await res.json();
//to store data in session storaage of browser
        sessionStorage.setItem( 'user', JSON.stringify(data) );
      }else if(res.status === 400){
        Swal.fire({
          icon : 'error',
          tittle : 'Login Failed',
          text : 'Inavalid email or password'
        })
      }
    }

  });



  return (
    <div className='vh-100 '
     >
        <div className='container justify-content-center align-item-center d-flex'>
            <div  
            className='card m-4 p-4 '>
                <h1 className='text-center'>Login Form</h1>
                <hr /><br />
                 <form onSubmit={loginForm.handleSubmit}>
                 <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} />
                 <br /><br /><br />
                 <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} />
                 <br /><br /><br />
                 <button className='btn btn-success'>Login here</button>
                 <br /><br />
                 </form>
            </div>

        </div>
    </div>
  )
}

export default Login