import React from 'react';
import './static/style/main.css';
import Board from './components/Board'

class App extends React.Component {
  render() {
    return (
      <>
        <div>
            <h1>Tic Tac Toe</h1>
            <Board/>
        </div>
      </>
    )
  }
}
export default App