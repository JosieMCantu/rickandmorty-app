import React from 'react';
import { render, screen } from '@testing-library/react';
import RickandMortyContainer from './RickandMortyContainer';

describe('Rick and Morty Container', () => {
    it('renders a list of characters', async () => {

        render(<RickandMortyContainer />);

        screen.getByText('Loading...');
        
        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});