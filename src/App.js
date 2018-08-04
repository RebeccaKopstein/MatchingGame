import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
  score: 0,
  topScore: 0
  };

  randomRender = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    console.log(this.state.friends[id])
    if (this.state.friends[id].click===false){
      this.state.score ++
      // this.setState({score:score})
      // console.log(this.state.friends[id].click)
      this.state.friends[id].click= true
      this.setState({ friends })
      // console.log(this.state.friends[id].click)
      this.shuffleData(this.state.friends)

    } 
    else{
      console.log("game over")
    }
    // console.log(this.state.friends)

    // this.setState({ friends });
  };

 shuffleData = friends => {
   let i = friends.length -1;
    while(i>0){
      const j = Math.floor(Math.random()*(i + 1))
      const temp = friends[i]
      friends[i]= friends[j]
      friends[j] = temp
      i--
    }
   
    this.setState({friends})
    return friends
 }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="jumbotron">
  <h1> Puppy Memory Game </h1>
  <h6> Click a puppy to start earning a score... but remember what you clicked so you don't click any puppy twice!</h6>
<hr/>
  <p className="display-4">Score: {this.state.score}</p>
</div>
        {this.state.friends.map(friend => (
          <FriendCard
            randomRender={this.randomRender}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            click={friend.click}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
