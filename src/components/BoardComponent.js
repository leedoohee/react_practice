


import React, {Component} from 'react';



class Board extends Component {



    addContent = (e) => {
        this.props.addContent(this.props.contents); // ac tion
    }

    render () {
        const {contents} = this.props;
        console.log(this.props)
        return (
            <div>
                <button onClick ={this.addContent}> + </button>
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