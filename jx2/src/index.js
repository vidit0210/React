// import ReactDOM from 'react-dom';
const React = require('react')
const ReactDOM = require('react-dom')

const name= 'Vidit';
const sur_name='Shah'
const App = () => {
    return <div style={{color:'aqua'}}> Hi Vidit!, Lets get Started with React.js ES6  </div>;
}
const  App_2=()=>{
    return <h1 style={{backgroundColor:'red'}}>{name} {sur_name} ,BlockChain Developer</h1>
}

ReactDOM.render( < App / > , document.querySelector("#root"))
ReactDOM.render(<App_2/>,document.querySelector('.new'))
