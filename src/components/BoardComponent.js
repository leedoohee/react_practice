


import React, {Component} from 'react';



class Board extends Component {


    render () {
        const {contents} = this.props;
        return (
            <div>
                {contents.map( v => {
                    return (
                        <div>
                            {v.title}
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Board;