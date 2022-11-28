import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Cat extends Component{
  //In calss compoenets , state is stored in a state object
  state ={isHungry: true};

  render(){
    return(
      <View>
         <Text>
            I am {this.props.name} , and I am 
            {this.state.isHungry ? "hungry" : "fulkll"} ! 
          </Text>
          <Button
              onPress={ ()=>{
                this.setState({isHungry: false});
             }}
             disabled ={!this.state.isHungry}
             title = {
              this.state.isHungry ? "Pour me some milk, please !" : "Thank you !"
             }
            / >
      </View>
    );
  }
}
class CafeClass extends Component{
  render(){
    return(
      <>
        <Cat name= "Munkustrap" />
        <Cat name="Tom"/>
      </>
    );

  }
}

export default CafeClass;