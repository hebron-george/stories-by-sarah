import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Header from './components/Header';
import AllStories from './components/AllStories';
import StoryViewer from './components/StoryViewer';

function App() {
  return (
    <div className="App">
      <Header />

      <AllStories />
      {/*<StoryViewer />*/}
    </div>
  );
}

export default App;
