import React from 'react';
import { WebView } from 'react-native-webview';
import {StyleSheet,Text, View, ActivityIndicator } from 'react-native';
import {Context} from "./Context.js";
import Drawer from 'react-native-drawer'
import SideBar from "../screens/SideBar.js";


class Onama extends React.Component{

state={
    onama: null,
}

closeControlPanel = () =>{
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };


getPosts = async() => {
    const response = await fetch(
      `https://superinfo.ba/wp-json/wp/v2/pages/44`,
    )
    const data = await response.json();
    this.setState({onama: data.content.rendered})
 }
 componentDidMount(){
    this.getPosts();
 }
 rendering = (html) =>{

    if(this.state.onama === null){
        return(
            <View style={{flex: 1,alignItems: 'center',
            justifyContent: 'center',backgroundColor: "white" }}>
            <ActivityIndicator animating size="large" />
        </View>
        )
    } else{
        return(
            <View style={styles.container}>
            <Context.Consumer>
       {data => {
           return(
               <Drawer
               open={data.drawerOpen}
               tweenDuration={200}
               captureGestures={false}
               openDrawerOffset={0.3}
               // onCloseStart={data.handleChange}
               ref={(ref) => this._drawer = ref}
               content={<SideBar navigation={this.props.navigation} handleStateDrawer={data.handleChange} drawerClose = {this.closeControlPanel} />}
   >
            <WebView
            ref={(ref) => { this.webview = ref; }}
             style={{ height: "100%", width: "100%", resizeMode: 'cover', flex: 1 }}
               source={{html: html}}
              //  injectedJavaScript={this.jsCode}
              //  injectedJavaScriptBeforeContentLoaded={this.jscode}
              scalesPageToFit={false}
            />
            </Drawer> ) }}
                    </Context.Consumer>
            </View>
        )
    }
 }
    

    render(){

        const html = ` <script> window.onload = function() {
            var anchors = document.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                anchors[i].onclick = function() {return false;};
            }
        }; </script> <style> img { display: block; min-width: 98%; max-width: 98%; height: auto; margin: 1% } iframe {display: block; max-width: 100%; height: auto; margin: 1%}
         table {display: block; max-width: 100%; height: auto; margin: 1%} </style> ${this.state.onama} `
        return(
            this.rendering(html)
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width:"100%",
      },
  
  });


export default Onama;