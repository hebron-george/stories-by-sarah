import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Header from './components/Header';
import AllStories from './components/AllStories';

function App() {
  return (
    <div className="App">
      <Header />

      <section class="section">
        <div class="container">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>
        </div>
      </section>

      <AllStories />
    </div>
  );
}

export default App;
