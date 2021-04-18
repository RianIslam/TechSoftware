import { motion } from 'framer-motion'
import React from 'react'
import './HeaderMain.css'

const buttonVariants ={
    visible:{
        x:[0,-20,20,-20,0],
        transition:{delay:2}
    },
    hover:{
        scale:[1.1,1,1.1,1.1,1,1.1,1],
        textShadow:'0px 0px 8px rgba(255,255,255)',
        boxShadow:'0px 0px 8px rgba(255,255,255)'
    }
}

const HeaderMain = () => {

    return (
        <div className="container homebackground">
            <div className="row">
                <div className="col-md-8 mt-5">
                    <motion.h1 
                    initial={{x:-20,y:10}}
                    animate={{x:20,y:-10}}
                    transition={{delay:0.4,duration:0.4}}
                    className="text-white display-2 mt-5">
                    Laptop,Tablet-iPad,Macbook Repair
                    </motion.h1>
                    <p className="text-white mt-3">Our company produces the urgent repair of electronic devices without additional cost.In this short period of time does not affect the quality of work.</p>
                    <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    className="">Read More</motion.button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default HeaderMain
