import React from 'react'
import './Body.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


function Body() {
    return (
        <div className='body'>
            <div className='body__header'>
                <div className='body__name'><p>Shipping and Payment</p></div>
                <div className='body__delivery'>
                    <ShoppingCartOutlinedIcon className='body__icon' />
                    <div className='bar'></div>
                    <LocalShippingOutlinedIcon style={{ background: "#199f73e0", color: "#fff" }} className='body__icon' />
                </div>
            </div>
            <div className='body__shipInfo'>
                <div className='body__form'>
                    <div className='body__buttongroup'>
                        <button style={{ background: "#199f73e0", color: "#fff" }}>LOGIN</button>
                        <button >SIGN UP</button>
                    </div>
                    <p className='body__title'>Shipping Information</p>
                    <div className='body__shipinginfo'>

                        <div className='body__shipinginfo1'>
                            <input className='body__forminput' type="email" placeholder='Email' />
                            <input className='body__forminput' type="text" placeholder='First Nmae' />
                            <input className='body__forminput' type="text" placeholder='Last Name' />
                            <input className='body__forminput' type="text" placeholder='Phone No' />
                        </div>
                        <div className='body__shipinginfo2'>
                            <input className='body__forminput' type="text" placeholder='Address' />
                            <input className='body__forminput' type="text" placeholder='City' />
                            <input className='body__forminput' type="text" placeholder='Postal Code/ ZIP' />
                            <select className='body__forminput'>
                                <option>Poland</option>
                                <option>India</option>
                                <option>America</option>
                                <option>Saudia</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='body__payment'>
                    <p className='body__title'>Payment method</p>
                    <div className='body__paymentmode'>
                        <div className='body__paymentmoderow1'>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='http://pngimg.com/uploads/paypal/paypal_PNG2.png' alt='' /></button>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='http://pngimg.com/uploads/visa/visa_PNG4.png' alt='' /></button>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='http://pngimg.com/uploads/mastercard/mastercard_PNG14.png' alt='' /></button>

                        </div>

                        <div className='body__paymentmoderow2'>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='https://www.pinclipart.com/picdir/big/20-205533_bezahlmglichkeiten-mastercard-logo-png-white-clipart.png' alt='' /></button>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='https://www.discover.com/content/dam/dfs/credit-cards/global/images/discover-logo.png' alt='' /></button>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='http://pngimg.com/uploads/paypal/paypal_PNG2.png' alt='' /></button>
                        </div>


                    </div>
                    <p className='body__title'>Delivery method</p>
                    <div className='body__deliveryMethod'>
                        <div className='body__deliveryMethodrow1'>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='https://www.pinclipart.com/picdir/big/391-3919795_fedex-clipart-ups-delivery-fedex-logo-vector-png.png' alt='' /><p>$20.00</p></button>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='https://www.dpd.co.uk/asset_files/logo/dpd.png' alt='' /><p>$12.00</p></button>
                        </div>
                        <div className='body__deliveryMethodrow2'>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg' alt='' /><p>$15.00</p></button>
                            <button className='body__paymentBut'><img className='body__paymentImg' src='https://www.pinclipart.com/picdir/big/391-3919795_fedex-clipart-ups-delivery-fedex-logo-vector-png.png' alt='' /><p>$10.00</p></button>
                        </div>
                    </div>

                </div>

                <div className='body__cart'>
                    <p className='body__title'>Your cart</p>
                    <div className='body__products'>
                        <div className='body__item'>
                            <img className='body__itemImage' src='https://m.media-amazon.com/images/I/81TMZYU8xiL._AC_UL320_.jpg' alt='' />
                            <div className='body__itemDetail'>
                                <p className='body__itemName'>T-Shirt</p>
                                <p className='body__itemCatagory'>Summer Vibs</p>
                                <p className='body__itemId'>#1232323</p>
                            </div>
                            <span className='body__itemCost'>$65.78</span>
                        </div>
                        <div className='body__item'>
                            <img className='body__itemImage' src='https://m.media-amazon.com/images/I/81TMZYU8xiL._AC_UL320_.jpg' alt='' />
                            <div className='body__itemDetail'>
                                <p className='body__itemName'>T-Shirt</p>
                                <p className='body__itemCatagory'>Summer Vibs</p>
                                <p className='body__itemId'>#1232323</p>
                            </div>
                            <span className='body__itemCost'>$65.78</span>
                        </div>
                    </div>
                    <div className='body__totalCost'>
                        <p style={{color:"#7a7a7a"}}>Total Cost</p><span className='body__itemCost'>$65.78</span>
                    </div>
                    <div className='body__offer'>
                        <LocalShippingOutlinedIcon className='deliverIcon'/>
                        <p>Your are $3,002 away from free Shipping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
