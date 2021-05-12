import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetailContainer from './CharacterDetailContainer';

describe('Character Detail Container', () => {
    it('renders one character', async () => {

        render(<CharacterDetailContainer match={{params:
        {character: ''}}} />);

        screen.getByText('Detail Page');
        
        const ul = await screen.findByRole('list', { name: 'character' });
        expect(ul).toMatchSnapshot();
    });
});

