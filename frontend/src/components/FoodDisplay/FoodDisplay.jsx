import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'
import './fooddisplay.css'
import { Link } from 'react-router'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id="food-display">
        <h2>Top restaurant chains</h2>
       
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    // console.log(category,item.category)

            if(category==="All"||category===item.category){
                   return (<FoodItems key={index}
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}/>
                )}

            }
        ) 
            }
        </div>




    </div>
  )
}

export default FoodDisplay