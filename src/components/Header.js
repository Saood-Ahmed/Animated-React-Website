import React from 'react';
import Ball from '../img/football.png';
import '../App.css';
import useWebAnimations, { bounce } from '@wellyshen/use-web-animations';
import Heading from './Heading';

export default () => {
    // const { ref } = useWebAnimations({ keyframes: [
    //     {transform: 'translateY(-250px) scale(1.25)'},
    //     {transform: 'translateY(0px)'},
    //     {transform: 'translateY(-250px) scale(1.25)'},
    //     {transform: 'translateY(0px)'},
    //     {transform: 'translateY(-150px) scale(1)'},
    //     {transform: 'translateY(0px)'}
    // ],
    //     timing:{
    //         duration:4000,
    //         iterations: 1,
    //         easing: 'ease-in-out'
    //     } 
    // })

    const { ref, getAnimation } = useWebAnimations({ ...bounce })


    return(
        <>
        <div className='header'>
            <nav className="navbar navbar-dark bg-transparent d-flex justify-content-center">
                <a className="navbar-brand" href='/'>
                <img src={Ball} width="40" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                <h4>Bouncee</h4>
                </a>
            </nav>
            {/* ------------------Container----------------------- */}
            
                
                <Heading />
                <button type="button" className="btn btn-lg btn-success">Get Started</button>
                    <div ref={ref} className='football-div' onClick={() => {getAnimation().play()}}>
                        <img src={Ball} width='300px' height='auto' alt='Football'/>
                    </div>
                    
                </div>

           
        </>
        )
}