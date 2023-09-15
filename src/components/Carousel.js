import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = (props) => {
    const carousel = useRef(null);
    return (
        <div className="carousel-block">
            <h2>{props.data.header}</h2>
            <Swiper
                spaceBetween={15}
                loop={true} 
                slidesPerView={3}
                ref={carousel}
            >
                {
                    props.data.carousel.map((value, index) => 
                    {
                        return (<>
                            <SwiperSlide key={index}>
                                <h3>{value.title}</h3>
                                <p>{value.text}</p>
                            </SwiperSlide>
                        </>)
                    })
                }
            </Swiper>
            <div className="carouselNext" onClick={() => carousel.current.swiper.slideNext()}></div>
        </div>        
    );
};

export default Carousel;