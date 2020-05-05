 
import {connect} from 'react-redux';
import * as actions from '../actions/boardActions';
import Board from '../components/BoardComponent';

export default connect((state, ownProps) => {
        return {
        	...state.board
        }
}, actions)(Board)