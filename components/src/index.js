const React = require('react');
const ReactDOM = require('react-dom');

const App = ()=>{
    return (
        <div className='ui conatiner comments'>
            <div className='comment'>
                <a href='/' className='avatar'>
                <img alt="avatar"/>
                </a>
                <div className="content">
                <a href="/" className="author">
                Sam
                </a>
                <div className = 'metadata'>
                <span className ="date">Today at 6:00pm</span>
                </div>
                <div className ="text">Nice Blog Post</div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))