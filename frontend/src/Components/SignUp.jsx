import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


const SignUp = () => {

  //to navigate to login


  const navigate = useNavigate();


  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',

    },
    //async use with the function for using await 
    onSubmit: async (values) => {
      console.log(values);
      ///fetch used to conenct the data of frontend with backend 
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        //stringify convert javascript into json
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Signup Success',
          text: 'Now Login to continue'
        })
        navigate('/login');//to navigate to login page
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something Went Wrong',
          text: 'Please Try Again'
        })
      }
    },

    // validationSchema : SignupSchema

  });


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.01, y: '100%', x: '100%' }}//for inital animaation//rotation can also used in it
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      transition={{ duration: 0.5, type: 'spring', damping: 15, stiffness: 100 }}
      style={{
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
        backgroundImage: 'url("https://img.freepik.com/premium-photo/white-background-with-school-supplies-around-edges-background-space-text_894754-3463.jpg?w=2000")'
      }}
    >


      <div className='container justify-content-center align-items-center d-flex vh-100'
        
      >
        <div className='card m-4 p-5 ' style={{ backgroundColor: 'transparent', border: '1px solid transparent' }}>
          <h1 className='text-center p-4' style={{ backgroundColor: 'whitesmoke', fontStyle: 'cursive', fontSize: '50px', fontWeight: 'bold' }}>Sign-In Form</h1>
          <form onSubmit={signupForm.handleSubmit}>
            <input className='form-control' type="text" id='name' placeholder='Enter your name here' onChange={signupForm.handleChange} value={signupForm.values.name} />
            <br />
            <input className='form-control' type="text" id='email' placeholder='Enter your email ' onChange={signupForm.handleChange} value={signupForm.values.email} />
            <br />
            <input className='form-control' type="password" id='password' placeholder='Enter your password' onChange={signupForm.handleChange} value={signupForm.values.password} />
            <br />
            <input className='form-control' type="password" id='confirm' placeholder='enter confirm password' onChange={signupForm.handleChange} value={signupForm.values.password} />
            <br />
            <button type='submit' className='btn btn-success'>Sign-Up</button>
            <br /><br />
          </form>
        </div>

      </div>
    </motion.div>
  )
}

export default SignUp;