import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>

    <div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://bethlehemhandicrafts.com/cdn/shop/articles/IMG_3058.jpg?v=1531557327"
       height={550} width={1400} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/collection-eggs-table-with-black-background_948735-163814.jpg?w=2000"
      height={550} width={1400} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item  " >
      <img 
       src='https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?cs=srgb&dl=pexels-sanketh-rao-716107.jpg&fm=jpg'
       height={550} width={1400} className="d-block w-100" alt="..." />
    </div>
  
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container  align-items-center justify-content-center " style={{marginLeft:"100px"}}>
      <h1
       style={{color:'teal',fontFamily:'cursive',fontSize:'70px',fontWeight:'bolder'}} 
       className='text-center my-2'>WELCOME TO YOUR'sHOP</h1>

      <div className='row '
      
      >
        <div className='col-md-3 shadow '>
           <img height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNQSLSE6GoyxfGbykzFQs_v6wPxhp06gzA&usqp=CAU" alt="" />
           <h6 className='text-center mt-3' style={{color:'crimson',fontWeight:'500',fontSize:'30px'}}>Best Craft's</h6>
           <hr />
           <p className='text-center' >Lorem ipnxbcckjhsjkd jdhjsd mncbzjcb ccbbca sbaas aahsva asbh , doloremque eveniet reprehenderit provident re</p>

        </div>
        <div className='col-md-3 shadow '>
           <img height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiu2gSqGn7a9WyoJlWn3RB7IXHMSu4cqkdIQ&usqp=CAU" alt="" />
           <h6 className='text-center mt-3' style={{color:'crimson',fontWeight:'500',fontSize:'30px'}}>Vast Collection</h6>
           <hr />
           <p className='text-center' >Lorem ipnxbcckjhsjkd jdhjsd mncbzjcb ccbbca sbaas aahsva asbh , doloremque eveniet reprehenderit provident re</p>

        </div>
        <div className='col-md-3 shadow '>
           <img height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Fyaa2M6tFuxOyGbZQPpMX5S42X0hdJ0Wbw&usqp=CAU" alt="" />
           <h6 className='text-center mt-3' style={{color:'crimson',fontWeight:'500',fontSize:'30px'}}>Handicraft</h6>
           <hr />
           <p className='text-center' >Lorem ipnxbcckjhsjkd jdhjsd mncbzjcb ccbbca sbaas aahsva asbh , doloremque eveniet reprehenderit provident re</p>

        </div>
        <div className='col-md-3 shadow '>
           <img height={180}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhUoYYcybqwuu4eZu-21k6yQ243nJQPNHfQ&usqp=CAU" alt="" />
           <h6 className='text-center mt-3' style={{color:'crimson',fontWeight:'500',fontSize:'30px'}}>
            Folk Craft's
           </h6>
           <hr />
           <p className='text-center' >Lorem ipnxbcckjhsjkd jdhjsd mncbzjcb ccbbca sbaas aahsva asbh , doloremque eveniet reprehenderit provident re</p>

        </div>
      </div>
      <div className=" card text-center mt-3">
        <div className="card-body " style={{backgroundColor:'brown',color:'white'}}>
          <h2>All Activity</h2>
          <hr />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore harum, ab deleniti ratione explicabo, quos suscipit illum officiis nobis odio perferendis doloremque qui eveniet cum! Omnis animi blanditiis aliquam possimus.</p>
           {/* <a className='btn btn-primary'  style={{fontSize:'20px'}} href="#">View More</a> */}
           <Link to={'/signup/'} className='btn btn-primary mt-3'>View More</Link>
           {/* <Link to={'/viewhandicraft/'+handicraft._id} className='btn btn-primary mt-3'>View More</Link> */}

           <div className='mt-4'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL8YpVn0GHbbZ4mherJxFSydyqXi04_N83hQ&usqp=CAU" alt="" height={60}
             style={{border:'1px solid transparent',borderRadius:'10px',backGroundColor:'crimson'}}
            />
           </div>
        </div>

    </div>
    </div>
</div>
    
  )
}

export default Home;