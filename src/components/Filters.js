import React from 'react'


class Filters extends React.Component {
  
   state = {
     animal: "All"
   }


  handleChange = (event) => {
    this.props.onChangeType(this.state.animal)
    
    this.setState({
      animal: event.target.value
   })
  }



  hardbutton = (event) => {
     this.props.onFindPetsClick(event)
  }
  
  
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>
        
        <div className="field">
          <button onClick={this.hardbutton} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
