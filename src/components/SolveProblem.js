import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, Modal, TouchableHighlight, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity, TextInput, ScrollView} from 'react-native-gesture-handler';


function AddMessage(props) {
    var mychatbox = true;
    var chatbox = false;
    // const mychatbox = props.mychatbox;
    // if(mychatbox)
    if (mychatbox)
        return (
            <Image style={styles.mychatbox} source={require('../img/img_mychatbox.png')}/>
        );
    else {
        return (
            <Image style={styles.chatface} source={require('../img/img_chatface.png')}/>
            &&
            <Image style={styles.chatbox} source={require('../img/img_chatbox.png')}/>
        )
    }

}

const SolveProblem = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
    const keyboardVerticalOffset = 570;
    return (
        
      <ScrollView>
            <View style={{backgroundColor: '#E0F3F1', height:650}}>
                {/* 機器人臉與說話框 */}
                <View style={{flexDirection:'row', marginTop:26}}>
                    <Image style={{resizeMode:'contain', width:50, height: 50, marginLeft:16}} source={require('../img/img_chatface.png')}/>
                    <Image style = {{resizeMode:'contain', width:25, marginLeft:5}} source = {require('../img/img_chatboxline.png')} />
                    <ImageBackground style={{width: 215, height:125, marginLeft:-6}} source={require('../img/img_chatbox.png')}>
                    <View style={{width: 200, paddingTop:16, paddingLeft:16}}>
                        <Text style={{lineHeight:21, fontSize: 14, color:'#393939'}}>哈囉！最近有哪些事情讓你煩惱呢?{"\n"}(以1.2.3. 標示條列才能讓我看懂喔！)</Text>
                    </View>
                    </ImageBackground>
                </View>  
                <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                    <View style={{width:342, height:58, borderColor:'#378D8F', marginTop:420, borderWidth:1, borderRadius:30, marginLeft:16,flex:1, position:'absolute'}}>
                    <TextInput 
                        style={{width:300, height:38, textAlignVertical:'center', marginTop:12, marginLeft:24, fontSize:16}}
                        placeholder='Say Something...'
                        multiline={true}
                        autoFocus={true}
                        >
                    </TextInput>
                    {/* <Text>哈</Text> */}
                    </View>
                {/* <Image style = {styles.mychatbox} source = {require('../img/img_mychatbox.png')}/> */}

                {
                    messages.map((message, i) => <Text style={styles.event} key={i}>{message}</Text>)
                }
            </KeyboardAvoidingView>
 </View>
 </ScrollView>
    );
}

const styles = StyleSheet.create({
    solvebg: {
        backgroundColor: '#E0F3F1',
        height: 650
    },
    robotarea: {
        flexDirection: 'row',
        marginTop: 40,
    },
    chatface: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginLeft: 20
    },
    mychatbox: {
        width: 230,
        height: 65,
        resizeMode: 'contain',
        marginLeft: 195,
        marginTop:10,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    robotsay1box: {
        width: 180,
        position: 'absolute',
        marginTop: 65,
        marginLeft: 103
    },
    robotsay1: {
        lineHeight: 20,
        fontSize: 14,
        color: '#393939'
    },
    startanswerbg: {
        backgroundColor: '#378D8F',
        width: 85,
        height: 35,
        borderRadius: 20,
        marginLeft: 290,
        marginTop: 340,
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    startanswer: {
        color: 'white',
        paddingLeft: 14,
        paddingTop: 10
    },
    q1: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        width: 420,
        height: 815
    },
    q1title: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25
    },
    q1titlebg: {
        backgroundColor: '#378D8F',
        height: 65
    },
    q1box: {
        backgroundColor: '#FAFAFA',
        width: 300,
        height: 420,
        marginLeft: 55,
        marginTop: 200
    },
    anssec1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 45,
        marginLeft: 40
    },
    num1: {
        color: '#378D8F',
        fontSize: 14,
    },
    q1confirmbg: {
        backgroundColor: '#C4E1E7',
        width: 85,
        height: 40,
        borderRadius: 20,
        marginLeft: 165,
        marginTop: 170,
        shadowColor: 'black',
        shadowOffset: {width: 1},
        shadowOpacity: 0.2
    },
    q1confirm: {
        color: '#393939',
        paddingLeft: 29,
        paddingTop: 12
    },
    event:{
        color: '#393939',
        marginLeft:270,
        marginTop:167,
        position:'absolute',
    }
});

export default SolveProblem;
