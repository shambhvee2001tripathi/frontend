import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageHandicrafts = () => {

  const [handicraftList, setHandicraftList] = useState([]);

  const fetchHandicraftData = async () => {
    const res = await fetch('http://localhost:5000/handicraft/getall');
    console.log(res.status);

    const data = await res.json();
    console.table(data);

    setHandicraftList(data);
  };
  useEffect(() => {
    //in first we have to wite the things wich should work on page open
    fetchHandicraftData();

    //  return () => {
    //       in second we have to wite the things wich should work before page open
    //    alert('Do you want to save changes')

    //  }
  }, []);

  const deleteHandicraft = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/handicraft/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    // now data will delete but it will represennt only when you rfresh the page,
    //so we call thefetch userdata function again here so we dont need to refresh the page

    if (res.status === 200) {
      fetchHandicraftData();
      toast.success('Handicraftt Deleted Successfully');//to add toast on browse page
    }
  }




  return (
    <div className='vh-100 bg-body-secondary'>
      <div className='container py-5'>
        <h1 className='text-center my-4'>Manage Handicrfts</h1>


        <table className="table table-dark">
          <thead>
            <tr>
              {/* <tr></tr>  table row*/}
              <th scope="col">S.no</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Material</th>

              <th scope="col">Type</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              handicraftList.map((handicraft, index) => (
                <tr key={handicraft._id}>
                  <td>{index + 1}</td>
                  <td>{handicraft._id}</td>
                  <td>{handicraft.title}</td>

                  <td>{handicraft.type}</td>
                  <td>{handicraft.category}</td>
                  <td>{handicraft.material}</td>

                  <td>{handicraft.price}</td>


                  <td>
                    <Link to={'/updatehandicraft/' + handicraft._id} className='btn btn-primary'>Edit</Link>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => { deleteHandicraft(handicraft._id) }}>Delete</button>
                  </td>
                  {/* when we use this onclick here in delete button it will show its id in console */}

                </tr>
              ))
            }



          </tbody>
        </table></div>

    </div>
  )
}

export default ManageHandicrafts