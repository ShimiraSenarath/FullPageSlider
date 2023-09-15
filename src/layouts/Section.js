import React from 'react'
import Logo from '../components/Logo';
import Video from '../components/Video';
import Carousel from '../components/Carousel';
import Image from "../components/Image";
import 'animate.css';

export const Section = (props) => {

    const containerClass = props.data.hasVideo ? 'container video-content' : 'content';
    const pageName = props.data.pageName;

  return (
    <section className={`${pageName} section`} data-anchor={props.data.pageName}>
        <div className='header-content'>
            <Logo data="logo" theme={props.data.themeColor} />            
            {
                props.data.hasUrlLink ?( <>
                <a className="link-wrapper" href={props.data.urlLink.link}>{props.data.urlLink.text}</a>
                </>): <></>               
            }
        </div>            
        
        {
            props.data.hasVideo ? (
                <>
                <div className={containerClass}>
                    <Video data={props.data} />
                    <h2 className="animate__animated animate__backInRight">{props.data.header}</h2>
                    <p className="animate__animated animate__backInLeft">{props.data.description}</p>
                </div>
            </>
            ) : (
                <>
                    <div className={containerClass}>
                        <Image data={props.data.imageUrl} />
                        <div className='carousel-wrapper'>
                        {
                            props.data.hasCarousel ? 
                            <Carousel data={props.data}/> :
                            <>
                                <h2>{props.data.header}</h2>
                                <p>{props.data.description}</p>
                            </>
                        }
                        <div className='carousel-end'></div> 
                        </div>
                          
                    </div>
                </>
            )
            
            }
        </section>
  )
}

export default Section;