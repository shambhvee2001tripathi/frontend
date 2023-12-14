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
                    <img className='card-img-top ' width={3500} height={250} src={"http://localhost:5000/" + handicraft.image} alt="" />
                    <div className="card-body">
                        <h3>✨ {handicraft.title}</h3>
                        <h6>✨ {handicraft.category}</h6>
                        <h6>✨ {handicraft.type}</h6>
                        <h6>✨ {handicraft.material}</h6>

                        <h4>₹-{handicraft.price}</h4>
                        {/* to link 1 page with another page */}
                        <Link to={'/viewhandicraft/' + handicraft._id} className='btn btn-primary mt-3'>View More</Link>
                    </div>

                </div>
            </div>
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.01, y: '100%', x: '100%' }}//for inital animaation//rotation can also used in it
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, type: 'spring', damping: 15, stiffness: 100 }}
            style={{
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsgVgQK4JXpgK493SxZmOAwRZK65a6LgwGA&usqp=CAU")'
            }}
            className=''>

            <h1>HandicraftBrowser</h1>

            <div className="container">
                <div className="row">
                    {displayHandiCrafts()}
                </div>
            </div>


        </motion.div>
    )
}

export default BrowseHandicraft