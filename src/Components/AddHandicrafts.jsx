import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddHandicrafts = () => {
    // const navigate = useNavigate();

    const [selFile, setSelFile] = useState('');

   const add = useFormik({
    initialValues: {
      title: '',
      category: '',
      type: '',
      material: '',
      price: '',


    },
    //async use with the function for using await 
    onSubmit: async (values) => {
      values.image = selFile;
      console.log(values);
      ///fetch used to conenct the data of frontend with backend 
      const res = await fetch('http://localhost:5000/handicraft/add',{
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
        title : 'Your Craft Has Added',
        text : 'Now Login to continue'
       })
    //    navigate('/login');
       //to navigate to login page
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

  const uploadFile = async(e) => {
    if(!e.target.files)return;
    const file = e.target.files[0];
    setSelFile(file.name);

    const fd = new FormData();
    fd.append('myfile', file);

    const  res = await fetch('http://localhost:5000/util/uploadfile',{
      method:'POST',
      body: fd 
    });
    console.log(res.status);
  }



  return (
    <div style={{backgroundRepeat :'no-repeat',backgroundSize : 'cover',backgroundImage:'url("data:image/jpeg;base64,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")'}} >
        <div className='container justify-content-center align-item-center d-flex'>
            <div style={{backgroundRepeat :'no-repeat',backgroundSize : 'cover',
              backgroundImage : 'url("data:image/jpeg;base64,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")'}} className='card m-4 p-4 text-center' >
              <h1 className='text-center'>Add Crafts Here</h1>
                 <form onSubmit={add.handleSubmit}>
                 <input className='form-control' type="text" id='title' placeholder='Enter craft title here' onChange={add.handleChange} value={add.values.title} /> 
                  <br/>
                 <input className='form-control' type="text" id='category' placeholder='Enter craft category ' onChange={add.handleChange} value={add.values.category} />
                 <br />
                 <input className='form-control' type="text" id='type' placeholder='Enter craft type' onChange={add.handleChange} value={add.values.type} />
                 <br />
                 <input className='form-control' type="text" id='material' placeholder='enter craft material' onChange={add.handleChange} value={add.values.material}/>
                 <br />
                 <input className='form-control' type="text" id='price' placeholder='enter craft price' onChange={add.handleChange} value={add.values.price}/>
                 <br/>
                 <input className='form-control' type="file" id='file' placeholder='enter craft image' onChange={uploadFile} />

                 <input className='form-control' type="textarea" id='details' placeholder='enter craft details' onChange={add.handleChange} value={add.values.details} />
                  <br/>
                 <button className='btn btn-success'>Tap to Add</button>
                 <br /><br />
                 </form>
            </div>

        </div>
    </div>
  )
}

export default AddHandicrafts;