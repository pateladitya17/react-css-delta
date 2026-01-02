import React from 'react'
import { genTicket, sum } from './helper';
import "./Lottery.css";
import Ticket from './Ticket';
import Button from './Button';


function Lottery({n = 3, winCondition}) {
    let [ticket, setTicket] = React.useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n))
    }
  return (
    <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <Button action={buyTicket} />
        <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  )
}

export default Lottery;