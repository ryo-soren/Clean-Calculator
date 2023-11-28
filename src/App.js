import './App.css';
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {

  const [data, setData] = useState('')

  const calculate = () => {
    try {
      console.log(data);
      evaluate(data) ? setData(evaluate(data).toString()) : setData("0")
    } catch (error) {
      console.log(error);
      setData('Please enter a valid expression')
      setTimeout(() =>{
        setData('')
      }, 1200)
    }
  }

  return (
    <>
    <div className='container'>

      <div className='left'>
        <h1>
          Clean Calculator
        </h1>

        <p>
        In creating this calculator program, my foremost goal was to craft an application with
        a sleek and easily understandable design. Given the importance of user-friendly 
        interfaces, effort was put into ensuring that the program's layout and functionality 
        are intuitive and accessible. <br className='break'/>
        <br/>
        Additionally, my aim was to build a tool that actively updates as users input 
        values and equations. <br className='break'/>
        <br/>
        With this project, I've demonstrated my commitment to user-centric design and 
        the seamless integration of real-time functionality.
        </p>
      </div>

      <div className='right'>
        <div className='grid-container'>
          <div className='grid row row1'>
            <div>{data}</div>
            <button onClick={() => setData(data.substr(0,data.length - 1))}>AC</button>
            <button onClick={() => setData("")}>C</button>
          </div>

          <div className='grid row row2'>
            <button value={"1"} onClick={ e => setData(data + e.target.value)}>1</button>
            <button value={"2"} onClick={ e => setData(data + e.target.value)}>2</button>
            <button value={"3"} onClick={ e => setData(data + e.target.value)}>3</button>
            <button value={"*"} onClick={ e => setData(data + e.target.value)}>*</button>
          </div>

          <div className='grid row row3'>
            <button value={"4"} onClick={ e => setData(data + e.target.value)}>4</button>
            <button value={"5"} onClick={ e => setData(data + e.target.value)}>5</button>
            <button value={"6"} onClick={ e => setData(data + e.target.value)}>6</button>
            <button value={"/"} onClick={ e => setData(data + e.target.value)}>/</button>
          </div>

          <div className='grid row row4'>
            <button value={"7"} onClick={ e => setData(data + e.target.value)}>7</button>
            <button value={"8"} onClick={ e => setData(data + e.target.value)}>8</button>
            <button value={"9"} onClick={ e => setData(data + e.target.value)}>9</button>
            <button value={"+"} onClick={ e => setData(data + e.target.value)}>+</button>
          </div>

          <div className='grid row row5'>
            <button value={"."} onClick={ e => setData(data + e.target.value)}>.</button>
            <button value={"0"} onClick={ e => setData(data + e.target.value)}>0</button>
            <button onClick={() => calculate()}>=</button>
            <button value={"-"} onClick={ e => setData(data + e.target.value)}>-</button>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default App;
