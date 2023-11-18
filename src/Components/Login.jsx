import React from 'react'
import Swal from 'sweetalert2';
import {motion} from 'framer-motion';

// import useAppContext from '../AppContext';

import { useFormik } from 'formik';
import { Link } from 'react-router-dom';


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
    <motion.div className='vh-100 '
    initial={{opacity: 0, scale:0.01, y:'100%', x:'100%' }}//for inital animaation//rotation can also used in it
      animate={{opacity:1, scale:1, y:0, x: 0 }}
      transition={{duration: 0.5, type: 'spring' ,damping: 15,stiffness: 100}}
      style={{backgroundRepeat :'no-repeat',backgroundSize : 'cover',
        backgroundImage:'url("https://media.istockphoto.com/id/1199384244/vector/stationery-background-school-tools-seamless-pattern-art-education-wallpaper-with-line-icons.jpg?s=612x612&w=0&k=20&c=IL_HBlKt1LqvqBpdaLxH5ToTTSLNBwBFBbhHahfmKSI=")'}}
        
     >
        <div className=' vh-100 container justify-content-center align-items-center d-flex'
        >
            <div  style={{border:'4px solid #046c95'}}
            className='card m-4 p-4 justify-content-center align-items-center d-flex '>
                <h1 className='text-center' style={{color:'#046c95'}}>Login Form</h1>
                <br />
                
                 <form onSubmit={loginForm.handleSubmit}>
                 <input className='form-control' type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} placeholder='Enter your email ' />
                 <br /><br />
                 <input className='form-control' type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} placeholder='Enter your password' />
                 <br /><br />
                 {/* <button  style={{backgroundColor:'crimson'}}className='btn w-100'>Login here</button> */}
                 <Link style={{backgroundColor:'crimson'}} to={'/addhandicrafts/'} className='btn w-100 mt-3'>Login </Link>

                 <br /><br />
                 </form>
            </div>

        </div>
    </motion.div>
  )
}

export default Login