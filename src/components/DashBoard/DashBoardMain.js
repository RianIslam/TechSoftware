import React from 'react'
import FooterInfo from '../Shared/Footer/FooterInfo'
import DashBoard from './DashBoard'

const DashBoardMain = () => {
    return (
        <div className="container-fluid py-5">
            <DashBoard/>
            <FooterInfo/>
        </div>
    )
}

export default DashBoardMain
