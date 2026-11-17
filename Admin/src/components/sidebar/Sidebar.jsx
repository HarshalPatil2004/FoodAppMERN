import './Sidebar.css'
import {assets} from '../../admin_assets/admin_assets/assets'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-options" aria-label="Admin navigation">
                <NavLink to='/add' aria-label="Add Item" className={({isActive}) => `sidebar-option${isActive ? ' active' : ''}`}>
                    <img src={assets.add_icon} alt="" aria-hidden="true" />
                    <p>Add Item</p>
                </NavLink>
                <NavLink to='/list' aria-label="List Item" className={({isActive}) => `sidebar-option${isActive ? ' active' : ''}`}>
                    <img src={assets.order_icon} alt="" aria-hidden="true" />
                    <p>List Item</p>
                </NavLink>
                <NavLink to='/orders' aria-label="Orders" className={({isActive}) => `sidebar-option${isActive ? ' active' : ''}`}>
                    <img src={assets.order_icon} alt="" aria-hidden="true" />
                    <p>Orders</p>
                </NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar