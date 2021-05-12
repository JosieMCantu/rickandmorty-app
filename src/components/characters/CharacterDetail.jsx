import React from 'react';
import PropTypes from 'prop-types';


function CharacterDetail({character}) {
    return (
        <>
            <h1>Detail Page</h1>
            <p>{character.id}</p>
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <img src={character.image} />
        </>
    )
};

CharacterDetail.propTypes = {
    character: PropTypes.object.isRequired,
};

export default CharacterDetail;


