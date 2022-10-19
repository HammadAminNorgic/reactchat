import React, { Component } from 'react';

class NoGroupContainer extends Component {
  render() {
    return (
        <div style={{height:'100%'}} className="leftSectionEmptyContainer">
        <p className="noAvailableText">No Available ChatRoom</p>
        <p className="tapText">Tap and hold on any message to star it, so you can easily find it later.</p>
      </div> 
    );
  }
}

export default NoGroupContainer;

const styles={
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"green"
    },
    text:{
        color:'white'
    }
}