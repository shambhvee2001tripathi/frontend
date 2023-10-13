import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewHandicraft = () => {

  const { id } = useParams();

  const [handiCraftData, setHandiCraftData] = useState(null);

  const fetchHandicraftData = async () => {
    const res = await fetch('http://localhost:5000/handicraft/getbyid/'+id);
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
      return (<div className="card"  height={200}  >
        <img className='card-img-top' height={200} width={200} src={"http://localhost:5000/" + handiCraftData.image} alt="" />
        <div className="card-body">
          <h2>{handiCraftData.title}</h2>
          <h3>{handiCraftData.category}</h3>
          <h4>{handiCraftData.type}</h4>
          <h5>{handiCraftData.price}</h5>
          <p>{handiCraftData.details}</p>
        </div>

      </div>)
    }
  }
  return (
    <div className=' '>

      <h1>HandicraftBrowser</h1>

      <div  className="container">
        <div 
        
        className="row ">
          {displayHandiCrafts()}

        </div>
      </div>


    </div>
  )



}

export default ViewHandicraft