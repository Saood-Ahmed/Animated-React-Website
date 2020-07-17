import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import '../App.css';
import Trophy from '../img/trophy.png';

export default () => {

    const { ref } = useWebAnimations({ keyframes:[
        {transform: 'scale(1)'},
        {transform: 'scale(1.5)'},
        {transform: 'scale(0.75)'},
        {transform: 'scale(1.25)'},
        {transform: 'scale(1)'}
    ], 
    timing:{
        duration:2000,
        iterations: Infinity,
        easing: 'ease-in'
    } })

    return(
        <div className="container-fluid section3 bg-success text-white">
           <div className="container">
                <div className="row ">
                    <div className="col col-12 col-md-6">
                        <h1 className="display-3">Win Exciting Prizes!</h1>
                        <h1 className="display-6">Avail the great chance of winning unique prizes.</h1>
                        <button type="button" className="btn btn-lg btn-light text-success">View Details</button>
                    </div>
                    <div ref={ref} className="col col-12 col-md-6 player">
                        <img src={Trophy} width="50%" height="auto" alt="Responsive-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}