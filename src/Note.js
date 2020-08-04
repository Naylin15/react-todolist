import React, { Component } from 'react';


const FirstColumn = (props) => {
    const singleNote = props.notesArray.map((note, index) => {
       return (
        <div key={index}>
           <h2>{note.title}</h2>
          </div>
       )
     })
    
    return <div>{singleNote}</div>

}

class Note extends Component {
    render() {
        const {notesArray} = this.props
        return (
            <div className="article ui two column stackable grid">
                <FirstColumn notesArray={notesArray}/>
                    {/* firstColumn */}
                <div>
                    {/* secondColumn */}
                </div>
            </div>
        )
    }
}


export default Note