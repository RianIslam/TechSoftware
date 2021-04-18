import React, { useEffect, useState } from 'react'
import Service from './Service'

const ServiceInfo = () => {

    const [services,setServices] =  useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
        <h1 className="text-center display-4">What We Do</h1>
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
