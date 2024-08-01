import React from 'react';
import { data } from './data';
import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card-grid">
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            description={item.description}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
