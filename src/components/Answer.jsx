
import styled from 'styled-components'
import React, { useState, Component } from 'react';

const EightBallAnswer = styled.div`
    border-radius: 50%;
    background: black;
    padding: 50px; 
    width: 200px;
    height: 200px;  
    text-align: center;
    color: white; 
    &.animate{animation: mymove 0.5s 3;}
    
    .bluff{
        font-size: 84px;
        border-radius: 50%;
        background: white;
        padding: 44px; 
        margin-top: 42px;
        margin-bottom: 42px;
        margin-left: 21px;
        width: 64px;
        height: 64px;  
        text-align: center;
        color: black;
    }
`

class Answer extends Component {
    const [answer, setAnswer] = useState('')
    const _handleClick =  async (e) => {
        e.preventDefault()
        const url = `https://8ball.delegator.com/magic/JSON/${props.question}`
        const response = await fetch (url)
        const data = await response.json()
        setAnswer(data.magic.answer)
        if(e.target.classList.contains('animate')){
            e.target.classList.remove('animate');
          } else { 
            e.target.classList.add('animate');         
          }
     }
    return (
        <>
        <EightBallAnswer onClick ={this._handleClick.bind(this)} className='animate'><p className="bluff">8</p></EightBallAnswer>
        <p>Magic 8 Ball says: <br /><br /> <span className='answerText'>{answer}</span></p>
        </>
    )
}
export default Answer;