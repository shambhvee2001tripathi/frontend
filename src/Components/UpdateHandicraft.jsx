import { Formik } from 'formik';

import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



const UpdateHandicraft = () => {

    const {id} = useParams();

    const [handicraftData, setHandicraftData] = useState(null)

    const [selFile, setselFile] = useState('')

    const navigate = useNavigate();

    const fetchhandicraftData = async () => {
      const res = await fetch('http://localhost:5000/handicraft/getbyid/'+id);
      const data = await res.json();
      console.log(data);
      setHandicraftData(data);
    }
    useEffect(() => {
      fetchhandicraftData();
     }, [])
     const submitForm = async(values) => {
        values.image = selFile;
        console.table(values);
        const res = await fetch('http://localhost:5000/handicraft/update/'+handicraftData._id,{
          method:'PUT',//stingify is a static methode that indicate content being send or recieved is json data
        body:JSON.stingify(values),
        headers:{
          'Content-Type':'application/json'}
        })
        console.log(res.status);
        if(res.status === 200){
          Swal.fire({
            icon:'success',
            title:'Upadated Successfully',
            text:'Redirecting to Mange Handicraft',
        })
        navigate('/manage');
        }else if (res.status === 400){
          Swal.fire({
            icon:'error',
            title:'Try again',
          })
        }

     }

     const uploadFile = async(e) => {
      if(!e.target.files)return;

      const file = e.target.files[0];
      setselFile(file.name);

      const fd = new FormData();
      fd.append('myfile',file);
      
      const res = await fetch('http://localhost:5000/util/uploadfile',{
        method:'POST',
        body:fd
      });
     } 

  return (
    <div>
    <div style={{ width: "500px", }} className="card m-5 p-3 ">
    <div style={{ backgroundColor: "lightgreen" }} className="card-header">
      <h2 style={{ fontFamily: "cursive", }}>Update-handicraft</h2>
      
    </div>
    {/* to add loading when page connecting the data with frontend aand backend ,
     tobe safe from showing error while loaading */}
      {
        handicraftData!==null ? (
      

    <Formik //using formik and import it by installing npm i formik
    initialValues={handicraftData }
      onSubmit={submitForm}
      >
      {
        (handicraftForm) => (
          <form onSubmit={handicraftForm.handleSubmit}>

      <label style={{ fontFamily: 'arial', }} htmlFor="">ID-</label>
         <span style={{color:'red',fontSize:10,marginLeft:'10'}}>{handicraftForm.errors.id}</span>
       <input  id='id' onChange={handicraftForm.handleChange} value={handicraftForm.values.name} style={{ fontFamily: 'arial', border: "2px solid green" }} className='form-control' type="text" placeholder='Enter your name here' /> <br />

      <label style={{ fontFamily: 'arial' }} htmlFor="">Title-</label>
         <span style={{color:'red',fontSize:10,marginLeft:'10'}}>{handicraftForm.errors.title}</span>
      <input id='title' onChange={handicraftForm.handleChange} value={handicraftForm.values.title} style={{ fontFamily: 'arial', border: "2px solid green" }} className='form-control' type="text" placeholder='Enter your email here' /><br />

      <label style={{ fontFamily: 'arial' }} htmlFor="">Type-</label>
         <span style={{color:'red',fontSize:10,marginLeft:'10'}}>{handicraftForm.errors.type}</span>
      <input id='type' onChange={handicraftForm.handleChange} value={handicraftForm.values.type} style={{ fontFamily: 'arial', border: "2px solid green" }} className='form-control' type="text" placeholder='Enter your password ' /><br />
     
      <label style={{ fontFamily: 'arial' }} htmlFor="">Category-</label>
      <span style={{color:'red',fontSize:10,marginLeft:'10'}}>{handicraftForm.errors.category}</span>
       <input id='category' onChange={handicraftForm.handleChange} value={handicraftForm.values.category} style={{ fontFamily: 'arial', border: "2px solid green" }} className='form-control' type="text" placeholder='Enter your final password here' />
       
        <input type="checkbox" />    Rememmber me!<br /> <br />
        
        <button
          type='submit'
          style={{ border: "2px solid black", borderRadius: "10px", backgroundColor: "darkgreen" }}
          className='btn btn-dark w-100 '>Update handicraft</button><br />
        <button className='btn w-100' >Forgot password</button>
      </form>
          )
        }


          </Formik>) : <h1 className='text-center my-5'>Loading...</h1>
           // to show loading while opening the page and data is getting fetch 
     }
      <div className="card-footer">
        <p>@2023 Update-form. All right reserverd / Design by shambhvee </p>

      </div>
    </div>
        </div>
  )
}

export default UpdateHandicraft

 