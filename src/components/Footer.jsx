import React from 'react'
import './Footer.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__back'><ArrowBackIcon /> <p>Back</p></div>
            <div className='footer__buttongroup'>
                <button>CONTINUE SHOPPING</button>
                <button style={{background:"#199f73e0", color:"#fff"}}>PROCEED TO PAYMENT</button>
            </div>
            
        </div>
    )
}

export default Footer
