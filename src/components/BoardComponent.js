


import React, {Component} from 'react';



class Board extends Component {



    addContent = (e) => {
        this.props.addContent(this.props.contents); // ac tion
    }

    delContent = (idx) => {
        console.log(idx)
        this.props.delContent(this.props.contents, idx); // ac tion
    }

    render () {
        const {contents} = this.props;
        console.log(this.props)
        return (
            <div>
                <button onClick ={this.addContent}> + </button>
                {contents.map(( v, idx) => {
                    console.log(idx)
                    return (
                        <div>
                            {v.title}
                            <button onClick ={() => this.delContent(idx)}> - </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default Board;