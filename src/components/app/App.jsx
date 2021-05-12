import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RickandMortyContainer from '../../containers/RickandMortyContainer';
import './App.css';
import CharacterDetailContainer from '../../containers/CharacterDetailContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RickandMortyContainer} />
        <Route path="/:id" component={CharacterDetailContainer} />
      </Switch>
    </Router>
  )
}
