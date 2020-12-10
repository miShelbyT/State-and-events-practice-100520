import React from "react";

class DogCard extends React.Component {


state = {
  bark: false
}


bark = () => {
if (this.state.bark === true) {
  this.setState({bark: false})
}
  else {
    this.setState({bark: true})
  }
}

  render() {
// console.log(this.state)
    const { dogObj } = this.props

    return (
      <div className="card">
        <span className="content">
        <h2 >{dogObj.name}</h2>
          <img alt={dogObj.name} src={dogObj.img} />
        </span>
        <span className="bark">
          <button onClick={this.bark}>Bark</button>
          {this.state.bark === true ? 
          <h2>Bark</h2> : null
        }
        </span>
      </div>
    );

  }

}

export default DogCard;
