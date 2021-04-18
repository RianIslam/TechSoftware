import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Service from './Service'

const ServiceInfo = () => {

    const [services,setServices] =  useState([])
    useEffect(() => {
        fetch('https://ancient-coast-34039.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // const serviceInfo =[
    //     {
    //         title:'hello',
    //         description:'838388383'
    //     },
    //     {
    //         title:'hello',
    //         description:'838388383'
    //     },
    //     {
    //         title:'hello',
    //         description:'838388383'
    //     },
    //     {
    //         title:'hello',
    //         description:'838388383'
    //     },
    // ]

    return (
        <section className="bg-light">
        <div className="container py-5">
        <motion.h1
         initial={{x:-10,y:20}}
                    animate={{x:20,y:-10}}
                    transition={{delay:0.4,duration:0.4}}
         className="text-center display-4">Our Services</motion.h1>
        <div className="row">
            {
                services.map(infoser => <Service infoser={infoser}/>)
            }
            </div>
            <div className="text-center">
                <button>Explore More</button>
            </div>
        </div>
        </section>
    )
}

export default ServiceInfo
