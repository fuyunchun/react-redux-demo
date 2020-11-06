const add = '申请图书'
const remove = '上交图书'

function counder(state=0,action){
    switch(action.type){
        case add : return state + 1
        case remove : return state - 1
        default : return 10
    }
}

function ADD(){
    return {type:add}
}

function REMOVE(){
    return {type:remove}
}

// 处理异步的
function ASYNC(){
    return dispatch => {
        setTimeout(() => {
            dispatch(REMOVE())
        },200)
    }
}

export {
    counder,
    ADD,
    REMOVE,
    ASYNC
}