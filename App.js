/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import PropTypes from 'prop-types';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './App/components/Homescreen';
import AddNewItemScreen from './App/components/AddNewItemScreen';
import EditItemScreen from './App/components/EditItemScreen';


export default class App extends Component {
    render() {
        return <AppContainer/>;
    }
}

/*const App: () => React$Node = () => {
  return (
      <View style={styles.MainContainer}>

        <User name='Sam' FontSize = {20} FontColor= '#FF9800' />

        <User name='Pankaj' FontSize = {22} FontColor= '#03A9F4' />

        <User name='Anita' FontSize = {24} FontColor= '#FFC107' />

        <User name='Mukesh' FontSize = {26} FontColor= '#4CAF50' />

      </View>
  );
};*/


/*class User extends Component {

  render() {

    return (

        <Text style={{fontSize : this.props.FontSize, color: this.props.FontColor}}> Hello {this.props.name} ! </Text>

    );
  }
}


User.propTypes =
    {
      name: PropTypes.string,
      FontSize: PropTypes.number,
      FontColor: PropTypes.string,

    }

User.defaultProps =
    {
      name: "Default Name",
      FontColor: "#00E676",
      FontSize: 15,
    }

const styles = StyleSheet.create({

  MainContainer :{

    flex:1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',

  }

});*/

//export default App;


const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
    AddNewItemScreen: {
        screen: AddNewItemScreen,
    },
    EditItemScreen: {
        screen: EditItemScreen,
    },
});

const AppContainer = createAppContainer(AppNavigator);

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
*/
