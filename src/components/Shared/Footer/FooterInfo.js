import React from 'react'
import Footer from './Footer'

const FooterInfo = () => {
    const footersec =[
        {
            header:'Accelerate innovation with Our Services',
            describe:'The demands on IT have never been greater. You are expected to drive efficiencies. Manage legacy architectures. Plus empower your workforce and your customers.',    
            button:'PURCHASE NOW',
            facebook:'Facebook',
            twitter:'Twitter',
            google:'Google',
            center:'Sales Center',
            about:'About Us',
            support:'Support Center',
            email:'Sales@tecnosoft.com',
            phone:'44-4553-3434',
            address:'Av New Stret-New York'
        }
    ]
    return (
        <div className="container-fluid bg-dark">
            {
                footersec.map(foot => <Footer foot={foot}/>)
            }
        </div>
    )
}

export default FooterInfo
