import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import '../App.css';
import Player from '../img/player.jpg';

export default () => {

    const { ref } = useWebAnimations({ keyframes: [
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(45deg)'},
        {transform: 'rotate(-45deg)'},
        {transform: 'rotate(45deg)'}
    ], 
    timing: {
        iterations: Infinity,
        duration: 2000,
        easing:'ease-in-out'
    } })

    
    //Scrolling Function
    // window.onscroll = () => { startUp() };

    // const startUp = () => {
    //     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    //         getAnimation().play();
    //       } else {
    //         getAnimation().pause();
    //       }
    // }

    return(
        <div className='container-fluid section2'>
            <div className="container">
                <div className="row">
                    <div ref={ref} className="col col-12 col-md-6 player">
                        <img src={Player} width="50%" height="auto" alt="Responsive-1" />
                    </div>
                    <div className="col col-12 col-md-6">
                        <h1 className="display-3">Join Us</h1>
                        <h1 className="display-6">Be ready and prepared for a great Soccer game.</h1>
                        <button type="button" className="btn btn-lg btn-success text-white">Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
