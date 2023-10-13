import { AnimatePresence, motion } from 'framer-motion';//by npm i framer-motion
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const BrowseHandicraft = () => {

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

    // const deleteHandicraft = async (id) => {
    //     console.log(id);

    //     const res = await fetch('http://localhost:5000/handicraft/delete/' + id, { method: 'DELETE' });
    //     console.log(res.status);
    //     now data will delete but it will represennt only when you rfresh the page,
    //     so we call thefetch userdata function again here so we dont need to refresh the page

    //     if (res.status === 200) {
    //         fetchHandicraftData();
    //         toast.success('Handicraft Deleted Successfully');

    //   **********      to add toast on browse page by npm i react-hot-toast
    //     }
    // }

    const displayHandiCrafts = () => {
        return handicraftList.map((handicraft) => {
            return <div className='col-md-3'>
                <div className="card">
                        <img className='card-img-top ' width={3500} height={250}  src={"http://localhost:5000/"+handicraft.image} alt="" />
                    <div className="card-body">
                        <h1>{handicraft.title}</h1>
                        <h3>{handicraft.category}</h3>
                        <h3>{handicraft.type}</h3>
                        <p>{handicraft.price}</p>
{/* to link 1 page with another page */}
                        <Link to={'/viewhandicraft/'+handicraft._id} className='btn btn-primary mt-3'>View More</Link>
                    </div>
                  
                </div>
            </div>
    })
    }

    return (
        <div className='vh-100 '>

            <h1>HandicraftBrowser</h1>

            <div className="container">
                <div className="row">
                    {displayHandiCrafts()}

                </div>
            </div>


        </div>
    )
}

export default BrowseHandicraft