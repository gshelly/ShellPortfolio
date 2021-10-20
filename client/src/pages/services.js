import React from 'react';
import PageTransition from '../components/PageTransition/PageTransition';

const Services = (props) => {
  return (
    <>
    {props.toggleNewColor ?  <PageTransition selectedColor={props.selectedColor} /> : null }
    <div
    className="page"
    >
        <section>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1>Use React Router and React Transition Group</h1>
                <p>Alias laboriosam maiores autem nemo consectetur sed perspiciatis minus quibusdam dolorem ratione sapiente amet quia quis voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum culpa odio.</p>
            </section>
    </div>
    </>
  );
};

export default Services;
