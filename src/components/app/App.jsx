import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RickandMortyContainer from '../../containers/RickandMortyContainer';
import CharacterDetail from '../../containers/characters/CharacterDetail';
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RickandMortyContainer} />
        <Route path="/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  )
}
