import React from 'react'
import {Link , Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {ADD,REMOVE,ASYNC} from './counder'

function kehuan(){
    return <h1>《科幻类图书》</h1>
}

function xiaoshui(){
    return <h1>《小说类图书》</h1>
}

// 使用 @connect 需要安装redux装饰器，详情见下
https://www.cnblogs.com/tlfe/p/13930332.html

@connect(
    // state => ({num:state}), 没有合并reducer之前这么用
    state => ({num:state.counder}),
    {ADD,REMOVE,ASYNC}
)

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
                <div>还剩{this.props.num}本图书</div>
                <button onClick={this.props.ADD.bind(this)}>申请图书</button>
                <button onClick={this.props.REMOVE.bind(this)}>上交图书</button>
                <button onClick={this.props.ASYNC}>缓两天在交</button>
            </div>
        )
    }
}

export default App