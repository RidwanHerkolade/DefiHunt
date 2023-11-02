import { SplideSlide, Splide } from '@splidejs/react-splide'
import React from 'react'

const TrendData = ({trend}) => {
    // const autoplay = {
    //    dots: true,
    //       infinite: true,
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       autoplaySpeed: 2000,
    //       pauseOnHover: true,
    //       responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: true
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             initialSlide: 2
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //           }
    //         }
    //       ]
    
    //   };

  return (
    
    <div className='trend__divss' key={trend.item.id}>
              <div className="name__divs">
                 <div className='name__img'>
                     <img src= {trend.item.small}/>
                 </div>
                 
                 <div className='coin__name'>{trend.item.name}</div>
                 <div className='coin__price'>{trend.item.market_cap_rank}</div>
                
              </div>
              
    </div>
  )
}

export default TrendData



