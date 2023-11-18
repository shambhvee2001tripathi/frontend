import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';


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
    <motion.div
    initial={{opacity: 0, scale:0.01, y:'100%', x:'100%' }}//for inital animaation//rotation can also used in it
      animate={{opacity:1, scale:1, y:0, x: 0 }}
      transition={{duration: 0.5, type: 'spring' ,damping: 15,stiffness: 100}}
    style={{backgroundRepeat :'no-repeat',backgroundSize : 'cover',backgroundImage:'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhAQEhAPEBAQEA8PDw8PDw8PDw8QFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFw8QFysdHR0tLS0tKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKxAAAwACAQMDAwQCAwAAAAAAAAECAxEhEjFRBEFhE3GRgaGx0fDxMsHh/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAERAhIhMUFRA//aAAwDAQACEQMRAD8A+6pLwPKFSGRl9Bi+BdyzRHCyrDl19AdIQpKDNZyTaLaJVISNJVInKKygzW6Tj9QvY7Wc7nZKnNcv0xaxlqYk9zDrrny4yPSdmYmsZManSMrk7saJ4sHKfsdGvZGuVvUKse3sEJ87LdOgaNppZkYyDoJWJ75KMXQItI6rkhswYvLoV7ASih1QZ8cP1C0K2B0FkYLQiY4WiikEh4DNO0SoohKgJHlt8jIzgKD2mitM6lycZb09ewc+5+uiUOhUMg4U2hLRRB6dhncRSKSF4vBoh/YJaGyVoo0JZKRzZYE0dAZky3OnOsWynSdE4t8ok/3Lhunx4N8va7rWtMecGn34/coqDTNYxtQyoRHQjfTQanWOdILK/R+Rck6/sNeUqVCJjsQNw0j6JyUTCVNoeQ2xZYPsFihbACMi0kCkUE6iuhkjQNoOVrAaCBhHlbEcjmSD3SgNLC0BIGuicpZM5Tox0HDqKyipOEPsONOgiyMwwTLJFnUQzewWfxFIDZRI2iY2ri7L8gaH2SV+zKzDMKQBkwUEgsGzbAZMzWwACI3h8Eql+GdbEYdOeqhONgLgc7DXkhkRpKvF4ZpwvygvlMSSCy2SeF8EmgS6CQWtBlGtg1WGUOaWWig59Q5mgpAdBl488hnuUxQTyoPZKskBSGb13GhbCaLgti7CPsOg527FkMc7ofGw5XlbZuom6N1bCYq6Ea2AognxG2bG17sfKzmsN8zY6Xa8kre2ImMFnOMhlkYpguC62PDJmVaCWLg2J1gXIZxRswKBIQGBUagJBowUwGCGfJCkVYdBZcSQmSvYra0R6dsN8/08IfCBGh8BK6pJ5HyJ1gDn4pqF4A8aHlBaDpqF+n7crgbHOi8LY9Yd9uGC9/lc1LY0oosWu46QS9JODTJRyGJDPl6LodLQakAZ3RSMzIwQtHJneuf0Z02zi9VQrr/nPYTa1w+d9hvqM50xtk138XZNG2Qx32KJlc7zh9itmYNgkZl4pcHM2Uh6B1PS7NPuKbqDnhjaEdE6y+yBlVHSIxkKJgsFsKE6jbCYfROlyNNFblV/0wblc78IaI9ikYmvBWZBek/pCPE/KOgDDHlXNjkpUBxLRQLevaOOSwNi3QT7RfINCqghcEKAMEGiZRCXPgEJViPIbLDIO+da+A6SQbttnPmsq/dnP/yen3RmushWwpjXiaJ65DpLDNnRDOZspjXGxKlurtisaL89x1JpjcSlFpjZN0Ux1ruE60zekRebu/8AbFz5d9u38kbZNWc/095m/j7CTQGNEkaXgerJwMVjFJYzIjqis05XHRDY6DNjpCTg1ZUnrfIcsUAzJmYQhtnK87Xhhr1K9kxrp41emDYsWmYLhoRRIijoTDPQNC7NdEXYJNdHUI8hOWCmF8WzJs5+nT5T/k6ZrY2Xs/sK1LnpzSBz5+/ygYHyVpcmVtyg433J5cWux0IzRcZnWPPcjN6Q+RcsC50ZdZS4+S/VyNOLXPx2I0uWVN1Su5LO32Kz58E6rkq81JJk6oplrnwc7ozXSe10ymyWMoVDQyqJSiklSiOkaRkg50pSERy5FPf9F7s5Ky0+748expfHXp5cqlNb51wcC5fPv7mrnkKKk5x6sLhfYWsiXuccZnrQl5eeWTHPwLkBoaVsLMOmjCLKtoiqGTLBVIrvgm+F3HfZFYvsl0IFo3SGoBkh5kqp8BL1iPQ1yWlbXKM0bfAYt1zLBp8D1D8FpZQYXqufXkB0Od9yNxr7BJXJkXLQuNcobN5EwPky7Z6dWxFI3UZ9isRJLuSt65K4/cjkI6cuS3ttipl6jgl0mXeVTEy6ZyJMviZYzY6Eg9QgrZtMWV6KTSZybDNhLwXNLdc7fheyKP01a7L7bGu0kmPh9Wtdn+Ss3c9IT4YWzXzTfl7Fy8IoDslTDDIX3Yb5j0cT4GJene1+hSTm59T21G69cjaJZewSL4MqrjsdDPLw0elhvZZU75z2LQVIdDpFc7SqdA2GmAAyD2DvgVeADBTYgYCUyNQJYKCYlWJPujTjS7IoBhrU3h/T+AVjfj8FkPsYW1w1IPpcbO2qFqdomLOnl5USSK+ox6eueBYRHpnxtGkfJHHImIiasqB0hxrnR0JGonljnZzXXJ15kcuUrfNDFmaTWtp/szSjQilcIpariQMomCx7WysZ7cxNopkQodI6MBSWSnsgpmEs10yxckCxRZ0HG+q46O/0TX7Eawpj4Y6fcfDuyx1jEozeRpyIrjZTUyNZPAPUZ1PD7vto4a9U/HA104413xkW9NrfjyHqPKiijr5f5JrV/wA3esy8lUzzZoP1v6GpeHpyjUc+DNxr8FVk8lc7zdEAro3UFwyZhUCqBhtB6v8AELDNTBgXKrvv8Eqxa5/8Ojq4FemmgS1xZiePZ0VBPq13MuspJ7srFE4ff5KdL0IoUc2SS2zNmo1LjmllW9geN/JbDi2Vbf0uLH+B8jLKEieVBz8trmMx9AeitFxPjXgLIy9Du/yc3TPaqKXfCOdWHYS8a6cNlqWzimirsrn1x7U6vkScrJuhaYanEPnrZzWU2I5JXSSRpYGEWnwSlhpoeVtnPCPS9Lj4357fAntz69BG01/nB0bM6FNuf1thVCmCYtNCUwR3DYTPZUys1siHYWzVaWxVG+37hmthDPwlY2/uRcbfJ2JgbGJ5VzrEU6R3QEF2o3OhUh8xLqDpPg6DM6A6DNgytWQk72UJXBYTCaJ0yjEaK3EEYxjk6ihkYxRqHkxipRAzGFAQWYwE7Ef9mMSqyPWjsvsgmHLh/oRmMY0yxjGCmjv+f4DZjBm/SGMYNHxlZMYOfTMyMYMkYYMYL+JZCLMYOvLB8GMFYTJ7GMD9IToJjTUf/9k=")'}} >
        <div className='container justify-content-center align-item-center d-flex'>
            <div style={{backgroundRepeat :'no-repeat',backgroundSize : 'cover',
      backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/001/984/861/non_2x/abstract-blue-geometric-circles-overlapping-background-with-light-blue-free-vector.jpg")'        
  }}
            className='card m-4 p-4 text-center'>
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
    </motion.div>
  )
}

export default AddHandicrafts;