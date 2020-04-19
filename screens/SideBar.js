import React from "react";
import { render } from "react-dom";
import { Platform, StatusBar, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import GlobalVariables from "../constants/GlobalVariables.js"
import {Context} from "../components/Context.js";
import {ScrollView } from 'react-native-gesture-handler';

class SideBar extends React.Component{

    redirect = (value, handleCategory, category) => () =>{
        handleCategory(category);
        GlobalVariables.category = value;
        this.props.navigation.navigate("Category");
        this.props.drawerClose();
        this.props.handleStateDrawer();
    }
    redirectFocus = () =>{
        this.props.navigation.navigate("Root");
        this.props.drawerClose();
    }

    render(){

        return(
            <ScrollView 
               contentContainerStyle={{
     flex: 1
  }}>
            <View style={styles.container}>
            <Context.Consumer>
            {data => {
                return(
                <>
            {/* <TouchableOpacity>
            <View style={styles.slika}>
            <Image
                    source={require("../assets/images/splash.png")}
                    style={styles.slika}
                 />
                 </View>
            </TouchableOpacity> */}
            <View style={{height: 20}}></View>
            <TouchableOpacity onPress={this.redirect(5, data.handleCategory, "ŽIVOT+")} style={styles.menuZivot}>
                <Text style={styles.superinfo}>
                    ŽIVOT+ 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(9, data.handleCategory, "SPORT")} style={styles.menuSport}>
                <Text style={styles.superinfo}>
                    SPORT
                </Text>
            </TouchableOpacity>
             <TouchableOpacity onPress={this.redirect(2, data.handleCategory, "MAJKA I DIJETE")} style={styles.menuMajka}>
                <Text style={styles.superinfo}>
                    MAJKA I DIJETE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(3, data.handleCategory, "DOM I VRT")} style={styles.menuDom}>
                <Text style={styles.superinfo}>
                    DOM I VRT
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(10, data.handleCategory, "GASTRO")} style={styles.menuGastro}>
                <Text style={styles.superinfo}>
                    GASTRO
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(31, data.handleCategory, "ECO")} style={styles.menuEco}>
                <Text style={styles.superinfoEco}>
                    ECO
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(7, data.handleCategory, "SCENA")} style={styles.menuScena}>
                <Text style={styles.superinfo}>
                    SCENA
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(8, data.handleCategory, "LIFESTYLE")} style={styles.menuLifestyle}>
                <Text style={styles.superinfo}>
                    LIFESTYLE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(31, data.handleCategory, "Marketing")} style={styles.menuMarketing}>
                <Text style={styles.superinfoEco}>
                    Marketing
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.redirect(31, data.handleCategory, "Impressum")} style={styles.menuMarketing}>
                <Text style={styles.superinfoEco}>
                Impressum
                </Text>
            </TouchableOpacity>
            </>
                )

            }}

            </Context.Consumer>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width:"100%",
      },
      slika:{
          alignSelf: "center",
          width: "70%",
          height: 100,
          marginTop: 10,
          marginBottom: 20
      },

    superinfo: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: "7%",
        textAlign: 'center',
    },
    superinfoEco:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: 'center',
        marginTop: "7%",
        // borderBottomWidth: 1,
        // borderColor: "#CED0CE"
    },
    menuMarketing:{
        backgroundColor: "gray",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },

    menu:{
        backgroundColor: "red",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuZivot:{
        backgroundColor:"#4C8DC3",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuSport:{
        backgroundColor:"#75ABAD",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuMajka:{
        backgroundColor:"#A8795D",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuDom:{
        backgroundColor:"brown",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuEco:{
        backgroundColor: "green",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuScena:{
        backgroundColor: "#DF5286",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuGastro:{
        backgroundColor: "#A0A028",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },
    menuLifestyle:{
        backgroundColor: "purple",
        marginBottom: "1.5%",
        height: "8%",
        width: "80%",
        alignSelf: "center"
    },

});

export default SideBar;