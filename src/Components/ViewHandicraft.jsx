import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewHandicraft = () => {

  const { id } = useParams();

  const [handiCraftData, setHandiCraftData] = useState(null);

  const fetchHandicraftData = async () => {
    const res = await fetch('http://localhost:5000/handicraft/getbyid/' + id);
    console.log(res.status);

    const data = await res.json();
    console.table(data);

    setHandiCraftData(data);
  };
  useEffect(() => {
    //in first we have to wite the things wich should work on page open
    fetchHandicraftData();

    //  return () => {
    //       in second we have to wite the things wich should work before page open
    //    alert('Do you want to save changes')

    //  }
  }, []);

  const displayHandiCrafts = () => {
    if (handiCraftData !== null) {
      return (<div className="card w-100"  >
        <div className="row">
          <div className="col-md-4">

            <img  style={{border:'1px solid transparent',borderRadius:'10px'}} className='w-100 m-auto d-block' src={"http://localhost:5000/" + handiCraftData.image} alt="" />
          </div>
          <div className="col-md-8"
                style={{         backgroundRepeat: 'no-repeat', backgroundSize: 'cover',border:'1px solid transparent',borderRadius:'10px',
                  backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuFhx2CC1r5o5Lct_Nb7eKbUx4b8bHE2fww&usqp=CAU")'}}

          >
            <div className="card-body" 
            
            >
              <h2>✨ {handiCraftData.title}</h2>
              <h4>✨ {handiCraftData.category}</h4>
              <h4>✨ {handiCraftData.type}</h4>
              <h4>✨ {handiCraftData.material}</h4>
              <h3>₹ {handiCraftData.price}</h3>
              <h6>✔ {handiCraftData.details}</h6>
            </div>
          </div>
        </div>

      </div>)
    }
  }
  return (
    <div className='d-flex py-5 vh-100'
      style={{backgroundRepeat :'no-repeat',backgroundSize : 'cover',
        backgroundImage: 'url("https://img.freepik.com/premium-photo/set-elements-handicraft-decorative-items-handmade-wooden-background_73169-21.jpg?w=2000")'
      }}
    >

      {/* <h1>HandicraftBrowser</h1> */}
      <div className="container py-5 "
      >
        {displayHandiCrafts()}

      </div>
    </div>
  )
}
export default ViewHandicraft