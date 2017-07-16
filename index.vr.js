import React, { Component } from 'react';
import { View, Text, Pano, AppRegistry, asset, StyleSheet} from 'react-vr';

const places =[
  {
    title: 'Chess World',
    image: 'chess-world.jpg'
  },
  {
    title: 'Lombard',
    image: 'lombard-vr.jpg'
  },
  {
    title: 'Louvre',
    image: 'louvre-vr.jpg'
  },
  {
    title: 'Light Show',
    image: 'light-show.jpg'
  }
]

class WorldTour extends Component {
  constructor(){
    super();

    this.state={
      showMenu: false,
      place: 'light-show.jpg'
    }
  }
  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu})
  }

  render(){
    return(
      <View>
        <Pano source={asset(this.state.place)}></Pano>
        <View
          style={styles.menuBotton}
          onEnter={()=>this.toggleMenu()}>
          <Text style={styles.menuBottonText}>{this.state.showMenu ? 'Close Menu' : 'Open Menu'}</Text>
        </View>
        {
          this.state.showMenu ?
          <View style={styles.menu} >
              {
                places.map((place, index) =>{
                  return (
                    <View
                      style={styles.menuItem}
                      key={index}
                      onEnter={()=> this.setState({place: place.image})}
                      >
                      <Text style={styles.menuItemText} >{place.title}</Text>
                    </View>
                  )
                })
              }
          </View>
          :
          <View></View>

        }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  menu: {
    width: 5,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [
      {translate: [-2.5, -1, -7.5]}
    ]
  },
  menuBotton:{
    backgroundColor: '#fff',
    borderRadius: 0.25,
    width:0.5,
    height:0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:0.01,
    transform:[
      {translate: [-1, 0, -5]}
    ]
  },
  menuBottonText: {
    textAlign: 'center',
    fontSize: 0.15,
    color: 'black'
  },
  menuItem:{
    alignItems: 'center',
    justifyContent: 'center',
    width:1,
    height:1,
    borderRadius: 0.5,
    borderWidth: 0.02,
    backgroundColor: '#fff'
  },
  menuItemText: {
    fontSize:0.2,
    textAlign:'center',
    color: '#000'
  }
})
AppRegistry.registerComponent('WorldTour', () => WorldTour);
