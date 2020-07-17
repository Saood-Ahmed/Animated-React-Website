import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

export default () => {

    const { ref } = useWebAnimations({ keyframes: [
        {transform: 'scale(0.5)'},
        {transform: 'scale(1.5)'}
           
        ],
        timing:{
            duration:4000,
            iterations: 1,
            easing: 'ease-out'
        } 
    })

    return(
        <div>
             <h1 ref={ref} className="display-4 text-white heading">Let's Play together!</h1>
        </div>
    )
}