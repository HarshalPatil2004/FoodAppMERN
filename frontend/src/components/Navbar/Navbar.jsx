
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("menu")

    const { getTotalCartItems,token,setToken} = useContext(StoreContext)
    const navigate=useNavigate()

const logout=()=>{
    localStorage.removeItem("token");
    setToken("")
    navigate("/")

}

    return (
        <div className='navbars shadow-sm'>

            <Link to='/'>
                <img src={assets.logos} alt='' className='img-fluid logo'/>
            </Link>

            <ul className="navbars-menu">

                <Link to='/' onClick={()=>setMenu("home")}
                className={menu=="home"?"active":""}>Home</Link>

                <a href='#exploremenu' onClick={()=>setMenu("menu")}
                className={menu=="menu"?"active":""}>Menu</a>

                <li onClick={()=>setMenu("mobile-app")}
                className={menu=="mobile-app"?"active":""}>Mobile App</li>

                <li onClick={()=>setMenu("contact-us")}
                className={menu=="contact-us"?"active":""}>Contact us</li>

            </ul>

            <div className="navbars-right">

                <img src={assets.search_icon} alt="" className='img-fluid search'/>

                <div className="navbar-serach-icon">

                    <Link to='/cart' className="cart-icon-link">

                        <img src={assets.basket_icon} alt="" className='img-fluid basket' />

                        {getTotalCartItems() > 0 && (
                            <span className="cart-count">
                                {getTotalCartItems()}
                            </span>
                        )}

                    </Link>

                </div>
                {
                    !token?
                <button onClick={()=>setShowLogin(true)}
                className='btn btn-outline-danger'>Sign In</button>
                :<div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className='nav-profile-dropdown'>
                        <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr/>
                        <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>

                    </ul>
                </div>

                }

            </div>

        </div>
    )
}

export default Navbar
