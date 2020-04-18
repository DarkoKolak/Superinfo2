import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Objava from "../components/Objava.js";
import FirstPage from "../components/FirstPage.js";
import Drawer from 'react-native-drawer';
import SideBar from "./SideBar.js";
import {Context} from "../components/Context.js";


class SuperinfoHome extends React.Component{


    closeControlPanel = () =>{
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };


    render(){

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
        
            <FirstPage navigation={this.props.navigation}/>
      </Drawer>
                )
            }

            }
      </Context.Consumer>

            </View>
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

export default SuperinfoHome;