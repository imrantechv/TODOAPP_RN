// AddNewItemScreen.jsen.js
import React, { Component } from 'react';
import { Button, View, Text,TextInput } from 'react-native';
import styles from './styles/add_new_page_style';

export default class AddNewItemScreen extends Component {

   /* goBack() {
        const { navigation } = this.props;
        navigation.goBack();
        navigation.state.params.joinData(this.state.textInput_Holder);
    }*/

    render() {
        //const [nwItemText, setNewItem] = React.useState('');
        return (
            <View>
                <TextInput
                    multiline
                    placeholder="Add new Item"
                    style={styles.text_input}
                   // value={nwItemText}
                    onChangeText={data => this.setState({ textInput_Holder: data })}
                />


                <Button
                    title="Done"
                    onPress={() => {

                      //  this.props.navigation.state.params.onGoBack('123');

                        this.props.navigation.state.params.returnData(this.state.textInput_Holder);
                        this.props.navigation.goBack();
                        //this.props.navigation.state.params.onGoBack;
                       // this.props.navigation.goBack();
                        //this.goBack
                        // listData.push(nwItemText);
                       // this.props.navigation.state.params.updateData(this.state.textInput_Holder);
                       // this.props.navigation.goBack();
                        // Pass params back to home screen
                       // this.props.navigation.navigate('HomeScreen', {data:this.state.textInput_Holder});
                       // this.props.navigation.state.params.returnData(this.state.textInput_Holder);
                        //this.props.navigation.returnData(this.state.textInput_Holder);

                        console.log('This rtitle W', this.state.textInput_Holder);

                    }}
                />
            </View>
        )
    }
}
