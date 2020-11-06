// 合并多个 reducer

import {combineReducers} from 'redux'

import {counder} from './counder'  

// 有多少个直接在下面加
export default combineReducers({
    counder
})