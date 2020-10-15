import React, { useState } from 'react';
import Wrapper from './Wrapper'
import Answer from './Answer'

const EightBall = props => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('')

    const _handleChange = (question) => {
        setQuestion(question);
    };
    const _handleClick =  async (e) => {
        e.preventDefault()
        const url = `https://8ball.delegator.com/magic/JSON/${question}`
        const response = await fetch (url)
        const data = await response.json()
        setAnswer(data.magic.answer)
    }
return (
<Wrapper>
    <h2> Magic Eight Ball</h2>
    <form >
        <label>
            What is your question? 
            <input onChange = {(event) => _handleChange(event.target.value)} type='text' value={question} />
        </label>
        <button type='submit'>Ask the Magic 8 Ball</button>
    </form>
    <br />
        <Answer answer={answer} />
</Wrapper>
)
}
export default EightBall;