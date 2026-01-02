import { useState } from 'react'
import './App.css'
import Lottery from './Lottery'
import Form from './Form';
import CommentsForm from './CommentsForm';
import Counter from './Counter';
import Jocker from './Jocker';

function App() {
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
    <Lottery n={2} winCondition={winCondition} />
    <br /><br /> <br />
    <hr />
    <Form />
    <br /><br /> <br />
    <hr />
    <CommentsForm />
    <br /><br /> <br />
    <hr />
    <Counter />
    <br /><br /><br />
    <hr />
    <Jocker />
    </>
  )
}

export default App
