import React from 'react';
import './Scroll.css';

const Scroll = (props) => {

    const style = {
        height: '60vh',
        overflowY: 'scroll'
    };

    return (
        <div id='scroll' style={style}>
            {props.children}
        </div>
    );
};

export default Scroll;

