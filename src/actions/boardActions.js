import {ADD_CONTENT} from './actionTypes';

export const addContent = (contents) => {
    return {
        type : ADD_CONTENT,
        contents : [
            ...contents,
            {title : 'asdasjd'}
        ]
    }
}


