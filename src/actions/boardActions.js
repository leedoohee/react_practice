import {ADD_CONTENT} from './actionTypes';
import {DEL_CONTENT} from './actionTypes';

export const addContent = (contents) => {
    return {
        type : ADD_CONTENT,
        contents : [
            ...contents,
            {title : 'asdasjd'}
        ]
    }
}

export const delContent = (contents, idx) => {
    console.log([...contents.slice(0, idx), ...contents.slice(idx+1)])
    return {
        type : DEL_CONTENT,
        contents: [...contents.slice(0, idx), ...contents.slice(idx+1)]
    }
}


