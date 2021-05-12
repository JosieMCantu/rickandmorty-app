import React from 'react';
import PropTypes from 'prop-types';

const Character = ({id, name, status, image}) => (
    <><Link to={`/:${character.id}`}>
    <img src={image} alt={name} />
    <p>{id}</p>
    <p>{name}</p>
    <p>{status}</p></Link>
    </>
);

Character.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};


export default Character;
   