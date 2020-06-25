// Homescreen.js
import React, {Component} from 'react';
import {
    Button, View, Text, TouchableOpacity,
    TouchableHighlight, TextInput, Image,
} from 'react-native';
import styles from './styles/home_page_style';
import {SwipeListView} from 'react-native-swipe-list-view';
import {withNavigation} from 'react-navigation';

export default class Homescreen extends Component {

    static screen;

    constructor(props) {

        super(props);

        Homescreen.screen = this;


        this.array = [{
            id: 0, title: 'ONE',
        },
            {
                id: 1, title: 'TWO',
            },
            {
                id: 2, title: 'THREE',
            },
            {
                id: 3, title: 'FOUR',
            },
            {
                id: 4, title: 'FIVE',
            },
        ];

        this.array2 = [{
            id: 5, title: 'FIVE',
        },
            {
                id: 6, title: 'SIX',
            },
            {
                id: 7, title: 'SEVEN',
            },
            {
                id: 8, title: 'EIGHT',
            },
            {
                id: 9, title: 'NINE',
            },
        ];




        this.state = {

            arrayHolder: [],

            textInput_Holder: '',

            isEdit: false,
            text: '',

        };

        this.returnData = this.returnData.bind(this);
        deleteRow = deleteRow.bind(this);
        updateRow = updateRow.bind(this);
        loadMore = loadMore.bind(this);
        this.gotoUpdateScreen = this.gotoUpdateScreen.bind(this);
        this.returnDataAfterEdit = this.returnDataAfterEdit.bind(this);
        renderHiddenItem = renderHiddenItem.bind(this);


        //const {params} = this.props.navigation.state;
        //const {params1} = this.props.route.params;
        // console.log('This rtitle33', params.data);
        console.log('This rtitle33', this.props.navigation.state.params);
    }

    componentDidMount() {

        // const {data} = this.props.navigation.state.params

        this.setState({arrayHolder: [...this.array]});

    }

    nav() {
        return this.props.navigation;
    }

    /*deleteRow(title,id){
        console.log('This row Delete', title);
        console.log('This row Delete2', id);

       // this.array.push( {id:this.array.length+1,title : newItemForArray} );
        this.array.splice(id, 1);


        this.setState({arrayHolder: [...this.array]});
    };*/

    gotoUpdateScreen(position) {
        //  this.props.navigation.navigate('EditItemScreen', {position: position,returnDataAfterEdit: this.returnDataAfterEdit.bind(this)})
        console.log('This position ww', position);
        Homescreen.screen.nav().navigate('EditItemScreen', {
            position: position,
            returnDataAfterEdit: this.returnDataAfterEdit.bind(this),
        });

    }


    returnDataAfterEdit(newItemForArray, position) {
        // this.setState({id: id, name: name});
        console.log('This rtitle33', newItemForArray);
        console.log('This position', position);
        // this.textInput_Holder = newItemForArray;
        //Adding Items To Array.
        // this.array.push( {id:this.array.length+1,title : newItemForArray} );

        updateRow(newItemForArray, position);
    }

    //this.setState({arrayHolder: [...this.array]});


    returnData(newItemForArray) {
        // this.setState({id: id, name: name});
        console.log('This rtitle33', newItemForArray);
        // this.textInput_Holder = newItemForArray;
        //Adding Items To Array.
        this.array.push({id: this.array.length + 1, title: newItemForArray});
        this.setState({arrayHolder: [...this.array]});

    }


    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.array.filter(function (item) {
            //applying filter for the inserted text in search bar
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        // this.setState({arrayHolder: [...this.array]});
        this.setState({
            //setting the filtered newData on datasource
            //After setting the data it will automatically re-render the view
            // this.array= newData,
            arrayHolder: [...newData],
            text: text,
        });
    }


    render() {
        // console.log('This rtitle33', this.props.navigation.state.params.newItemText);

        return (
            <View style={styles.container}>
                <View style={styles.searchbar}>

                    <TextInput
                        style={styles.search_field}
                        onChangeText={text => this.SearchFilterFunction(text)}
                        value={this.state.text}
                        underlineColorAndroid="transparent"
                        placeholder="Search Here"
                    />
                    <View  style={[styles.searchbar_icon]}>
                    <TouchableOpacity>
                        <Image source={require('./images/search_icon.png')} style={{height: 40, width: 40, resizeMode: 'stretch'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => openAddnewPage(this.props.navigation, this.returnData)}>
                        <Image source={require('./images/plus_icon.png')} style={{height: 40, width: 40, resizeMode: 'stretch'}}/>
                    </TouchableOpacity>


                    </View>
                </View>
                <SwipeListView
                    style={styles.list_view}
                    data={this.state.arrayHolder}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={0}
                    rightOpenValue={-100}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen}
                />
                <TouchableOpacity style={styles.backText}
                    // onPress={() => updateRow(data.item.title, data.item.id)}
                    onPress={() => loadMore()}>
                    <Text style={styles.backText}>Load More</Text>
                </TouchableOpacity>
            </View>
            /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <Text>Home Screen</Text>
                 <Button
                     title="Go to About"
                     onPress={() => this.props.navigation.navigate('About')}
                 />
             </View>*/
        );
    }
}


function openAddnewPage(navigation, returnData) {
    navigation.navigate('AddNewItemScreen', {returnData: returnData.bind(this)});
}

const renderItem = data => (
    <TouchableHighlight
        style={styles.rowFront}
        underlayColor={'#AAA'}>
        <View>
            <Text>{data.item.title}</Text>
        </View>
    </TouchableHighlight>
);


function renderHiddenItem1(data, navigation) {

    return (<View style={styles.rowBack}>
        <Text></Text>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            // onPress={() => updateRow(data.item.title, data.item.id)}
            onPress={() => navigation.navigate('EditItemScreen', {
                position: data.item.id,
                returnDataAfterEdit: this.returnDataAfterEdit.bind(this),
            })}
        >
            <Text style={styles.backTextWhite}>Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => deleteRow(data.item.title, data.item.id)}
        >
            <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
    </View>);

}


/*function gotoUpdateScreen(position) {
    console.log('This position ww', position);
    Homescreen.screen.nav().navigate('EditItemScreen', {position: position,returnDataAfterEdit: this.returnDataAfterEdit.bind(this)})
}*/

var renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
        <Text></Text>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnLeft]}
            // onPress={() => updateRow(data.item.title, data.item.id)}
            //  onPress={() => this.props.navigation.navigate('EditItemScreen', {position: data.item.id,returnDataAfterEdit: this.returnDataAfterEdit.bind(this)})}
            onPress={() => Homescreen.screen.gotoUpdateScreen(data.item.id)}
        >
            {/*<Text style={styles.backTextWhite}>Close</Text>*/}
            <Image source={require('./images/edit_icon.png')} style={{height: 40, width: 40, resizeMode: 'stretch'}}/>

        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => deleteRow(data.item.title, data.item.id)}
        >
            {/*<Text style={styles.backTextWhite}>Delete</Text>*/}
            <Image source={require('./images/delete_icon.png')}
                   style={{height: 40, width: 40, resizeMode: 'stretch'}}/>
        </TouchableOpacity>
    </View>
);

function deleteRow(title, id) {
    console.log('This row Delete', title);
    console.log('This row Delete2', id);
    // this.array.push( {id:this.array.length+1,title : newItemForArray} );
    this.array.splice(id, 1);
    this.setState({arrayHolder: [...this.array]});
};

/*function gotoUpdateScreen(position) {

}*/



function loadMore() {
    this.array.push(...this.array2)

   // this.array.concat(this.array2);
    this.setState({arrayHolder: [...this.array]});
}


function updateRow(updatedItemString, position) {
    //  let newArray = [...this.state.array];
    // newArray[position] = updatedItemString;
    // this.setState({array: newArray});
    // this.setState({arrayHolder: [...this.array]});
    // this.array.push( {id:this.array.length+1,title : newItemForArray} );
    //const some_array = [...this.state.array];
    //  this.array[position] = updatedItemString;
    this.array[position] = {id: position, title: updatedItemString};
    this.setState({arrayHolder: [...this.array]});
    // this.setState({array:some_array});
}

const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
};
