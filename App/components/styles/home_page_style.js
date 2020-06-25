import { StyleSheet } from 'react-native'


export default StyleSheet.create({

    searchbar: {
        textAlign: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        height: 50,
        flex: .1,
        width: '98%',
        padding: 5,
        flexDirection: 'row',

    },

    searchbar_icon:{
        textAlign: 'center',
        alignSelf: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        paddingStart: 2,
        paddingEnd: 12,
        justifyContent: 'flex-end',
        height: 50,
        flex: 1,
        flexDirection: 'row',

    },
    search_field:{
        justifyContent: 'center',
        height: 50,
        alignSelf: 'stretch',
        color: '#000',
        flex:1
    },

    list_view:{
        flex: 1,
        padding: 5,
        width: '98%',
        alignSelf: 'center',},



    addItem: {
        flex: 1,
        justifyContent: 'center',
        margin: 5,

    },
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    backText: {
        color: '#000',
        textAlign: 'center',
        alignSelf: 'stretch',
        paddingBottom:30,
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 40,
    },
    backRightBtnLeft: {
        backgroundColor: 'white',
        right: 50,
    },
    backRightBtnRight: {
        backgroundColor: 'white',
        right: 0,
    },
});
