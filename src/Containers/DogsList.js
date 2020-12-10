import React, { Component } from "react";
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard'

class DogsList extends Component {
  
  allDogs = () => {
    return apiResponse.map(dogObj => <DogCard dogObj={dogObj} key={dogObj.id} />)
  }
  
  render() {
    // console.log(apiResponse)
    return <div className="list">
      {this.allDogs()}
      </div>;
  }
}

export default DogsList;
