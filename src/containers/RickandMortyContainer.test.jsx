import React from 'react';
import { render, screen } from '@testing-library/react';
import RickandMortyContainer from './RickandMortyContainer';
import { MemoryRouter } from 'react-router-dom';

describe('Rick and Morty Container', () => {
    it('renders a list of characters', async () => {

        render(<MemoryRouter><RickandMortyContainer /></MemoryRouter>);

        screen.getByText('Loading...');
        
        const ul = await screen.findByRole('list', { name: 'characters' });
        expect(ul).toMatchSnapshot();
    });
});