
import React, { useRef } from 'react'
import { menu_list } from '../../../assets/assets'
import './exploremenu.css'

const ExploreMenu = ({category,setCategory}) => {

    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className='explore-menu' id='explore-menu'>

            <h1>What's on your mind?</h1>

            <div className="explore-menu-slider">

                <button
                    className="slider-arrow left-arrow"
                    onClick={() => scroll("left")}
                >
                    &#10094;
                </button>

                <div className="explore-menu-list" ref={sliderRef}>

                    {
                        menu_list.map((item,index)=>{
                            return(
                                <div
                                    key={index}
                                    onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
                                    className="explore-menu-list-item"
                                >
                                    <img
                                        className={category===item.menu_name?"active":""}
                                        src={item.menu_image}
                                        alt={item.menu_name}
                                    />

                                    <p>{item.menu_name}</p>
                                </div>
                            )
                        })
                    }

                </div>

                <button
                    className="slider-arrow right-arrow"
                    onClick={() => scroll("right")}
                >
                    &#10095;
                </button>

            </div>

            <hr/>

        </div>
    )
}

export default ExploreMenu
