

import {combineReducers} from 'redux'
import {ADD_CONTENT} from '../../actions/actionTypes'


const defaultBoard = {title : 'aaa'};
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
    switch(action.type){
        case ADD_CONTENT : 
            return action.contents
        default : 
            return state;
    }
}






export default combineReducers({
    contents
})