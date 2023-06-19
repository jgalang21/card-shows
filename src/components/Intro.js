import React from "react";
import '../App.css';
import 'react-slideshow-image/dist/styles.css'
//import img from '../images/IMG_0509-1024x768.jpg'
import { Slide } from 'react-slideshow-image';

function Intro(){
  
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    // const imageList = images.map(x => {
    //     return <Slide>
    //         <div className="each-slide-effect">
    //             <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                   
    //             </div>
    //         </div>

    //     </Slide>

    // })

    return (
        <div className="intro">
             <h1 className="intro--header">Stuff Goes here</h1>
     
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                   
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                   
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>

        </div>
       
    )
}
export default Intro;