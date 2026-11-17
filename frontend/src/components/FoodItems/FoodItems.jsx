
import React, { useContext } from 'react'
import './fooditems.css'
import { StoreContext } from '../Context/StoreContext'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FoodItems = ({id,name,image,price,description}) => {

    const {cartItems,addToCart,removeFromcart}=useContext(StoreContext)

    return (
        <div className='food-item'>

            <div className="food-item-img-container">
                <img src={image} alt={name} className="food-item-image" />
            </div>

            <div className="food-item-info">

                <div className="food-item-name-rating">
                    <p>{name}</p>
                </div>

                <p className="food-item-desc">{description}</p>

                <p className="food-item-price">${price}</p>

            </div>

            {
                !cartItems[id] ?

                <div className='add'>
                    <button onClick={() => addToCart(id)}>
                        Add To Cart
                    </button>
                </div>

                :

                <div className='food-item-counter'>

                    <button
                        className="counter-btn minus"
                        onClick={() => removeFromcart(id)}
                    >
                        <FaMinus />
                    </button>

                    <span>{cartItems[id]}</span>

                    <button
                        className="counter-btn plus"
                        onClick={() => addToCart(id)}
                    >
                        <FaPlus />
                    </button>

                </div>
            }

        </div>
    )
}

export default FoodItems
