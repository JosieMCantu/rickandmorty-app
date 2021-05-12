import React from 'react';
import PropTypes from 'prop-types';
import characterById from '../../services/rickAndMortyApi';

const params = new URLSearchParams(window.location.search);
const characterId = params.get('id');
const character = characterById(characterId);


function CharacterDetail({id, name, status, image, species}) {
    return (
        <>
            <h1>Detail Page</h1>
            <p>{character.id}</p>
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.image}</p>
        </>
    )
};

CharacterDetail.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default CharacterDetail;


