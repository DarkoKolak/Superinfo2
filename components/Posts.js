import React from 'react';
import { StyleSheet, Linking, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import GlobalVariables from "../constants/GlobalVariables.js";
import { ScrollView } from 'react-native-gesture-handler';
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';


class Posts extends React.Component{
    

    render(){
        
        const html = ` <head><meta name="viewport" content="width=device-width, initial-scale=1"> </head><script> window.onload = function() {
            var anchors = document.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                anchors[i].onclick = function() {return false;};
            }
        }; </script> <style> img { display: block; min-width: 98%; max-width: 98%; height: auto; margin: 1% } iframe {display: block; max-width: 100%; height: auto; margin: 1%} table {display: block; max-width: 100%; height: auto; margin: 1%} </style><div><img style= width: 100%; height: 200  src=${GlobalVariables.image}/></div> ${GlobalVariables.content} `
        return(
      <WebView
      ref={(ref) => { this.webview = ref; }}
       style={{ height: "100%", width: "100%", resizeMode: 'cover', flex: 1 }}
         source={{html: html}}
        scalesPageToFit={false}
      />
        )
    }
}


export default Posts;