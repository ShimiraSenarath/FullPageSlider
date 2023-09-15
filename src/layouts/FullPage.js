import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section  from './Section';

const FullPage = (props) => {

    return(
        <div>
            

            <ReactFullpage
                licenseKey = {'YOUR_KEY_HERE'} 
                scrollingSpeed = {1000}
                navigation = {true}
                render={({state, fullpageApi}) => {

                    const moveSectionDown = () => {
                        if (fullpageApi) {
                          fullpageApi.moveSectionDown();
                        }
                    };
                    
                    return(
                        <>
                            <ReactFullpage.Wrapper>
                                {props.data.map((value, key) => <Section data={value} key={key}/>)}
                            </ReactFullpage.Wrapper>
                            <div className="slidingArrow" onClick={moveSectionDown}></div>
                        </>
                    );
                }}
            />
        </div>
    );

    
  
}

export default FullPage;
