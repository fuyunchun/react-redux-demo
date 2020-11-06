import React from 'react'
import {Link , Route} from 'react-router-dom'

function kehuan(){
    return <h1>《科幻类图书》</h1>
}

function xiaoshui(){
    return <h1>《小说类图书》</h1>
}

class App extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">科幻类图书</Link>
                    </li>
                    <li>
                        <Link to="/xiaoshui">小说类图书</Link>
                    </li>
                </ul>
                <Route path="/" exact component={kehuan}></Route>
                <Route path="/xiaoshui" component={xiaoshui}></Route>
                <div>还剩多少本图书</div>
                <button>申请图书</button>
                <button>上交图书</button>
                <button>缓两天在交</button>
            </div>
        )
    }
}

export default App