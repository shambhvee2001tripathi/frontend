import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import React from 'react'
import { useNavigate } from 'react-router-dom';

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
      const res = await fetch('http://localhost:5000/user/add',{
        method : 'POST',
        body : JSON.stringify(values),
        //stringify convert javascript into json
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      console.log(res.status);
      if(res.status === 200){
       Swal.fire({
        icon : 'success',
        title : 'Signup Success',
        text : 'Now Login to continue'
       })
       navigate('/login');//to navigate to login page
      }else{
      Swal.fire({
        icon :'error',
        title : 'Something Went Wrong',
        text : 'Please Try Again'
      })
    }
    },
    
    // validationSchema : SignupSchema

  });


  return (
    <div >
        <div className='container justify-content-center align-item-center d-flex'>
            <div className='card m-4 p-4 '>
                <h1 className='text-center'>Sign-In Form</h1>
                 <form onSubmit={signupForm.handleSubmit}>
                 <input type="text" id='name' placeholder='Enter your name here' onChange={signupForm.handleChange} value={signupForm.values.name} /> 
                  <br /> <br />
                 <input type="text" id='email' placeholder='Enter your email ' onChange={signupForm.handleChange} value={signupForm.values.email} />
                 <br /><br />
                 <input type="password" id='password' placeholder='Enter your password' onChange={signupForm.handleChange} value={signupForm.values.password} />
                 <br /><br />
                 <input type="password" id='confirm' placeholder='enter confirm password' onChange={signupForm.handleChange} value={signupForm.values.password}/>
                 <br /><br />
                 <button className='btn btn-success'>Sign-Up</button>
                 <br /><br />
                 </form>
            </div>

        </div>
    </div>
  )
}

export default SignUp;