import React, {useState, useEffect} from 'react';
import PageTransition from '../components/PageTransition/PageTransition';

const About = (props) => {
  return (
    <>
    {props.toggleNewColor ?  <PageTransition selectedColor={props.selectedColor} /> : null }
    
    <div className="page"   >
    
        {/* <section> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1 style={{position: "absolute", marginTop:"-1000x", paddingTop:"-10000px"}}>About</h1>
                {/* <p>Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum culpa odio.</p>
            </section> */}
    </div>
    </>
  );
};

export default About;
