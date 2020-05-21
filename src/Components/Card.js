import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p className='underline-hover grow pointer'>{email}</p>
            </div>
        </div>
    );
}

export default Card;
