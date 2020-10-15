import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main'

function App() {
  const renderItem = () => {
    console.log('RENDER ITEM ran')
  }
  return (
    <div className="App">
      <Header />
      <Main renderItem = {renderItem}/>
    </div>
  );
}

export default App;
