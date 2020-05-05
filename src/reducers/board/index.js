

import {combineReducers} from 'redux'
import {ADD_CONTENT, DEL_CONTENT} from '../../actions/actionTypes'


const defaultBoard = {title : 'aaa'};
const initState = {
    contents : [
        {title : 'aaa1'},
        {title : 'aaa2'},
        {title : 'aaa3'},
        {title : 'aaa4'},
        {title : 'aaa5'}
    ]
}



const contents = function(state = initState.contents, action) {
    switch(action.type){
        case ADD_CONTENT : 
            return action.contents
        case DEL_CONTENT: 
            return action.contents
        default : 
            return state;
    }
}






export default combineReducers({
    contents
})