

import {combineReducers} from 'redux'


const initState = {
    contents : [
        {title : 'aaa'},
        {title : 'aaa'},
        {title : 'aaa'},
        {title : 'aaa'},
        {title : 'aaa'}
    ]
}



const contents = function(state = initState.contents, action) {

    // switch(action.type){

    // }
    return state
}






export default combineReducers({
    contents
})