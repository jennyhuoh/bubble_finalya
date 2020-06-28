import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Alert, Modal, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Button} from 'react-native';
import {TouchableOpacity, TextInput, ScrollView} from 'react-native-gesture-handler';

function Keyboard() {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
    const keyboardVerticalOffset = 660;
    return( 
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <View style={{backgroundColor:'#E0F3F1', width:380, height: 65}}>
                <View style={{backgroundColor: '#fff', width:342, height:58, borderColor:'#378D8F', borderWidth:1,  borderRadius:30,marginTop:0, marginLeft:16, flexDirection:'row', position:'absolute'}}>
                    <TextInput 
                        onChangeText={text => setText(text)}
                        value={text}
                        style={{width:286, height:48,fontSize:16, paddingTop: 16, paddingLeft:24,}}
                        placeholder='1. Say Something...'
                        multiline={true}
                        autoFocus={true}
                        clearTextOnFocus={true}
                        />                     
                    <TouchableOpacity
                        onPress={()=> {
                            setMessages([...messages, text]);
                            setText('');
                        }}>
                        <Image style={{marginTop:3}} source={require('../img/btn_send.png')}/>
                    </TouchableOpacity>
                </View>
                </View>
            {/* <Image style = {styles.mychatbox} source = {require('../img/img_mychatbox.png')}/> */}

            {/* {
                messages.map((message, i) => <Text style={styles.event} key={i}>{message}</Text>)
            } */}
            </KeyboardAvoidingView>
    );
}

const SolveProblem = () => {
    const [messages, setMessages] = useState([]);

    return (
    <View style={{backgroundColor: '#E0F3F1'}}> 
        <ScrollView style={{height:575}}>       
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
            <View style ={{flexDirection:'row', marginTop:16}}>
                {/* <View style={{marginLeft:155}}>
                    <Text
                        // value={Keyboard.text}
                        style={{
                        backgroundColor:'#CEE5F7',
                        width:180,
                        height:85,
                        }}/>
                </View> */}
                {
                    messages.map((message) => <Text style={{marginLeft:155, backgroundColor:'#CEE5F7',width:180, height:85,}}>{message}</Text>)
                }
            <Image style={{resizeMode:'contain', width:25, marginLeft:-5}} source={require('../img/img_mychatboxline.png')} />
        </View>
        </ScrollView>
        <View>
            <Keyboard/>
        </View>
    </View>

    );
}

const styles = StyleSheet.create({
    
});

export default SolveProblem;
