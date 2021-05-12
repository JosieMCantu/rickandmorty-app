import React, { Component } from 'react';
import { characterById } from '../services/rickAndMortyApi';
import CharacterDetail from '../components/characters/CharacterDetail';


export default class CharacterDetailContainer extends Component {
    state = {
        character: {},
    }

    componentDidMount = async () => {

        const { id } = this.props.match.params

        const character = await characterById(id);

        if (character.id === id) {
            return character;
        }

        this.setState({character});
    }


    render() {

        const { character } = this.state;
        
        return (
            <div>
                <CharacterDetail character={character} />
            </div>
        )
    }
}

