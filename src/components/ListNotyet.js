import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { apisAreAvailable } from 'expo';

const ListNotyet = () => {
    return(
        <View style = {styles.listallbg}>
             <View style = {styles.time}>
                <View style = {styles.timebg}><Text style = {styles.times}>2020/05/12 星期二</Text></View>

            </View>
            <View style = {styles.eventlist}>
                <Image style = {styles.eventbubble} source = {require('../img/img_eventbubble3.png')}/>
                <Image style = {styles.eventbubble} source = {require('../img/img_eventbubble.png')}/>
                <Image style = {styles.eventbubble} source = {require('../img/img_eventbubble.png')}/>
            </View>
            <View style = {styles.shadows}>
                <Image style = {styles.bubbleshadow} source = {require('../img/img_bubbleshadow.png')}/>
                <Image style = {styles.bubbleshadow} source = {require('../img/img_bubbleshadow.png')}/>
                <Image style = {styles.bubbleshadow} source = {require('../img/img_bubbleshadow.png')}/>
            </View>

            <Image style = {styles.water} source = {require('../img/img_waters.png')}/>
            <Image style = {styles.imgbubble1} source = {require('../img/img_bubble_new.png')}/>
            <Image style = {styles.imgbubble2} source = {require('../img/img_bubble_new.png')}/>
            <Image style = {styles.imgbubble3} source = {require('../img/img_bubble_new.png')}/>
            <Image style = {styles.imgbubble4} source = {require('../img/img_bubble_new.png')}/>
            <Image style = {styles.imgbubble5} source = {require('../img/img_bubble_new.png')}/>
            
            <Image style = {styles.imgnet} source = {require('../img/img_net.png')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    listallbg: {
        backgroundColor: '#E0F3F1',
        height: 600,
    },
    imgbubble1: {
        // resizeMode: 'contain',
        width: 15,
        height: 16,
        position: 'absolute',
        marginTop: 440,
        marginLeft: 240
    },
    imgbubble2: {
        // resizeMode: 'contain',
        width: 25,
        height: 26,
        position: 'absolute',
        marginTop: 429,
        marginLeft: 168
    },
    imgbubble3: {
        // resizeMode: 'contain',
        width: 30,
        height: 31,
        position: 'absolute',
        marginTop: 450,
        marginLeft: 130
    },
    imgbubble4: {
        // resizeMode: 'contain',
        width: 30,
        height: 31,
        position: 'absolute',
        marginTop: 456,
        marginLeft: 190
    },
    imgbubble5: {
        // resizeMode: 'contain',
        width: 23,
        height: 24,
        position: 'absolute',
        marginTop: 410,
        marginLeft: 210
    },
    imgnet: {
        resizeMode: 'contain',
        width: 290,
        height:80,
        position: 'absolute',
        marginTop: 490,
        marginLeft: 90
    },
    eventlist: {
        flexDirection: 'row',
        marginLeft: 28,
        marginTop: 40,
        justifyContent:'space-around'
    },
    eventlist2: {
        flexDirection: 'row',
        marginLeft: 28,
        paddingTop: 40,
        justifyContent:'space-around'
    },
    eventbubble: {
        resizeMode: 'contain',
        width:100,
        height:100,
        marginRight: 25,
    },
    shadows: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 10,
        justifyContent:'space-around'
    },
    shadows2: {
        flexDirection: 'row',
        marginLeft: 25,
        paddingTop: 10,
        justifyContent:'space-around'
    },
    bubbleshadow: {
        marginRight: 22
    },
    // time: {
    //     flexDirection: 'row',
    //     marginLeft: 23,
    //     marginTop: 15,
    //     justifyContent:'space-around'
    // },
    // time2: {
    //     flexDirection: 'row',
    //     marginLeft: 23,
    //     marginTop: 15,
    //     justifyContent:'space-around'
    // },
    times: {
        width: 170,
        marginRight: 100,
        textAlign: 'center',
        paddingTop: 11,
        color: '#457289',
        fontWeight:'bold',
        fontSize:16,
    },
    timebg: {
        backgroundColor: 'white',
        width: 170,
        height: 40,
        borderRadius: 18,
        marginTop: 16,
        marginLeft: 16,

    },
    water: {
        position: 'absolute',
        resizeMode: 'contain',
        width:410,
        height:300,
        marginTop: 385,
        
    }
  });
export default ListNotyet;