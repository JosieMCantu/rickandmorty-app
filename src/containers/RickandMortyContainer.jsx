import React, { Component } from 'react';
import { findCharacters } from '../services/rickAndMortyApi';
import CharacterList from '../components/characters/CharacterList';


export default class RickandMortyContainer extends Component {
    state = {
        loading: true,
        character: []
    }

    async componentDidMount() {

        const characters = await findCharacters();
        
        this.setState({
            characters,
            loading: false,
        });
    }
    render() {

    const { loading, characters } = this.state;
    if (loading) return <h1>Loading...</h1>;

    return <CharacterList characters={characters} />
    }
}
