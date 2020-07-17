import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import '../App.css';
import Whatsapp from '../img/whatsapp.png';
import Twitter from '../img/twitter.png';
import Linkedin from '../img/linkedin.png';
import Insta from '../img/insta.png';

export default () => {

    const { ref, getAnimation } = useWebAnimations({ keyframes: [
        {transform: 'rotate(360deg)'},
        {transform: 'rotate(-360deg)'},
        {transform: 'rotate(360deg)'}
    ], 
    timing: {
        duration:5000,
        easing: 'ease-in-out'
    } })

    const { ref : ref2, getAnimation : getAnimation_1 } = useWebAnimations({ keyframes: [
        {transform: 'rotate(360deg)'},
        {transform: 'rotate(-360deg)'},
        {transform: 'rotate(360deg)'}
    ], 
    timing: {
        duration:5000,
        easing: 'ease-in-out'
    } })

    const { ref : ref3, getAnimation : getAnimation_2 } = useWebAnimations({ keyframes: [
        {transform: 'rotate(360deg)'},
        {transform: 'rotate(-360deg)'},
        {transform: 'rotate(360deg)'}
    ], 
    timing: {
        duration:5000,
        easing: 'ease-in-out'
    } })

    const { ref : ref4, getAnimation : getAnimation_3 } = useWebAnimations({ keyframes: [
        {transform: 'rotate(360deg)'},
        {transform: 'rotate(-360deg)'},
        {transform: 'rotate(360deg)'}
    ], 
    timing: {
        duration:5000,
        easing: 'ease-in-out'
    } })

    return (
        <div className="conatiner-fluid section4">
            <div className="container">
                <div className="row ">
                    <div ref={ref} className="col col-3" onMouseOver={() => {getAnimation().play()}}>
                        <img src={Whatsapp} width="50%" height="auto" alt="Responsive-1" />
                    </div>
                    <div ref={ref2} className="col col-3" onMouseOver={() => {getAnimation_1().play()}}>
                        <img src={Twitter} width="50%" height="auto" alt="Responsive-1" />
                    </div>
                    <div ref={ref3} className="col col-3" onMouseOver={() => {getAnimation_2().play()}}>
                        <img src={Linkedin} width="50%" height="auto" alt="Responsive-1" />
                    </div>
                    <div ref={ref4} className="col col-3" onMouseOver={() => {getAnimation_3().play()}}>
                        <img src={Insta} width="50%" height="auto" alt="Responsive-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}