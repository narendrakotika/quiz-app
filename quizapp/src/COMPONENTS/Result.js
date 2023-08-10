 import React from 'react'
import { myBasket } from '../App.js'

function Result() {

 const {myScore} = React.useContext(myBasket)

  return (
    <div>Your score out of 4 questions is {myScore}. </div>
  )
}

export default Result