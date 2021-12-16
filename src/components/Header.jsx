import React from 'react'
import './Header.css'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
                <div className='header__logoIcon'><AccountBalanceOutlinedIcon sx={{ fontSize: 40 }} className='header__icon' /></div>
                <div className='header__logoName'><span><samp style={{color: "#ffc107",fontSize:20}}>E-</samp>Shop</span></div>
            </div>
            <div className='header__catagory'>
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
            </div>
            <div >
                <SearchOutlinedIcon className='header__icon' />
                <ShoppingCartOutlinedIcon className='header__icon' />
                <PersonOutlineOutlinedIcon className='header__icon' />
            </div>
        </div>
    )
}

export default Header
