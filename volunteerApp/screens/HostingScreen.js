import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
class Inputs extends Component {
  state = {
    name: '',
    location: '',
  }
  // handleName = (text) => {
  //   this.setState({ name: text})
  // }
  // handleLocation = (text) => {
  //   this.setState({ location: text})
  // }
  // render() {
  //   return (
  //     <View style = {styles.container}>
  //       <TextInput style = {styles.input}
  //       placeholder = "Event Name"
  //       placeholderTextColor = "#9a73ef"
  //       onChangeText = {this.handleName}/>

  //       <TextInput style = {styles.input}
  //       placeholder = "Event Location"
  //       placeholderTextColor = "#9a73ef"
  //       onChangeText = {this.handleLocation}/>

  //     </View>
  //   )
  // }

}


export default class HostingScreen extends Component{
  // state = {
  //   name: '',
  //   location: '',
  // }
  // handleName = (text) => {
  //   this.setState({ name: text})
  // }
  // handleLocation = (text) => {
  //   this.setState({ location: text})
  // }
  // return (
    // <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    //   <OptionButton
    //     icon="md-school"
    //     label="Read the Expo documentation"
    //     onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
    //   />

    //   <OptionButton
    //     icon="md-compass"
    //     label="Read the React Navigation documentation"
    //     onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
    //   />

    //   <OptionButton
    //     icon="ios-chatboxes"
    //     label="Ask a question on the forums"
    //     onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
    //     isLastOption
    //   />
    // </ScrollView>
    // );
    
  //   <View style = {styles.container}>
  //   <TextInput style = {styles.input}
  //   placeholder = "Event Name"
  //   placeholderTextColor = "#9a73ef"
  //   onChangeText = {this.handleName}/>

  //   <TextInput style = {styles.input}
  //   placeholder = "Event Location"
  //   placeholderTextColor = "#9a73ef"
  //   onChangeText = {this.handleLocation}/>

  // </View>
  // );

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    var name = ""
    var location = ""
    var details = ""
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, marginBottom: 10}}
          placeholder="Name of Event"
          onChangeText={(text) => this.setState({text})}
          name={this.state.text}
          backgroundColor='#fff'
        />
        <TextInput
          style={{height: 40, marginBottom: 10}}
          placeholder="Location"
          onChangeText={(text) => this.setState({text})}
          location={this.state.text}
          backgroundColor='#fff'
        />
        <TextInput
          style={{height: 100}}
          placeholder="Event Details"
          onChangeText={(text) => this.setState({text})}
          details={this.state.text}
          multiline={true}
          backgroundColor='#fff'
        />
        
      </View>
      
    )
  }
  
    // let { name } = this.state;
    // let { location } = this.state;

    // return (
    //   <TextField
    //     label='Name'
    //     value={name}
    //     onChangeText={(name) => this.setState({ name })}
    //     label='Location'
    //     value={location}
    //     onChangeText={(location) => this.setState({ location })}
    //   />
    // )
  

}

// function OptionButton({ icon, label, onPress, isLastOption }) {
//   return (
//     <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
//       <View style={{ flexDirection: 'row' }}>
//         <View style={styles.optionIconContainer}>
//           <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
//         </View>
//         <View style={styles.optionTextContainer}>
//           <Text style={styles.optionText}>{label}</Text>
//         </View>
//       </View>
//     </RectButton>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 20,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  }
});
