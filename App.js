/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  ScrollView
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  _onPressButton() {
    Alert.alert("Button: " + this.state.text);
  }

  _onPressTouchable() {
    Alert.alert("Touchable: " + this.state.text);
  }
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };

    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <Blink text="Det er fandme nice det her" /> */}
          <Greeting name="Ludvig" />
          <Image source={pic} style={{ width: 193, height: 110 }} />
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>TestTestTest</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <TextInput
            style={{ height: 40 }}
            onChangeText={text => this.setState({ text })}
            placeholder="Type here to translate!"
          />
          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.text
              .split(" ")
              .map(word => word && "🍕")
              .join(" ")}
          </Text>
          <Button
            onPress={() => this._onPressButton()}
            title="This is a button"
          />
          <TouchableHighlight onPress={() => this._onPressTouchable()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style={{fontSize:40}}>Scroll</Text>
        <Text style={{fontSize:40}}>Scroll</Text>
        <Text style={{fontSize:40}}>Scroll</Text>
        <Text style={{fontSize:40}}>Scroll</Text>
        <Text style={{fontSize:40}}>Scroll</Text>
        <Text style={{fontSize:40}}>Scroll</Text>
        <Text style={{fontSize:40}}>Scroll</Text>
      </ScrollView>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.red}>Hello {this.props.name}</Text>
      </View>
    );
  }
}

class Blink extends Component {
  componentDidMount() {
    // Toggle the state every second
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      1000
    );
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  red: {
    color: "red"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    padding: 20,
    color: "white"
  }
});
