import React, { useContext } from 'react'
import './cart.css'
import { Link } from 'react-router'
import { StoreContext } from '../../Context/StoreContext'
const Cart = () => {
  const {cartItems,food_list,removeFromcart,getTotalCartAmount}=useContext(StoreContext)
  return (
    <div>


      <div className="cart">
        <div className="cart-items">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr/>
        {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(
                <div key={index}>
                <div className="cart-items cart-items-item">
                  <img src={item.image}/>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removeFromcart(item._id)}>X</p>

</div>
                </div>
              )
            }

          })
        }
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>

            </div>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{49}</p>
              
            </div>
<hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()+49}</p>
              
            </div>
          </div>
         <Link to='/placeorder' className="checkout-link">
    <button>PROCEED TO CHECKOUT</button>
</Link>
        </div>

      </div>
    </div>
  )
}

export default Cart
