/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native';
import {NativeModules} from 'react-native';
const {ToastModule} = NativeModules;
export default class App extends Component {
  _showToast() {
    ToastModule.showToast('This is a native toast!!');
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={this._showToast} title="Toast Btn" />
      </View>
    );
  }
}
