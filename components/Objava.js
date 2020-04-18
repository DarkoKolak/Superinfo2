import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Posts from "./Posts.js"
import GlobalVariables from "../constants/GlobalVariables.js";


class Objava extends React.Component{

    changeDate = (date) =>{
        const stringDate = date.substring(0,10);
        const day = stringDate.substring(8);
        const month = stringDate.substring(5,7);
        const year = stringDate.substring(0,4);
        return(
            <Text style={{paddingTop: 0}}>
                {day}.{month}.{year}
            </Text>
        )
    }
    cutString = (string) => {

        if(string.length > 70 ){
            let output1 = string.substring(0,70);
            let output2 = string.substring(70);
            let output3 = output2.substring(0,output2.indexOf(" ")+1) + "...";
            const toReturn = output1 + output3 ;
            
            return(
                toReturn
            )
        }
        return string;

    }

    onPress= (image,content,title) =>{
            // <Posts image={image} content={content}/>
            GlobalVariables.image= image;
            // content1 = content.replace('/\[\/?et_pb.*?\]/', '');
            //  const regex = /(<([^>]+)>)/ig;
              const special = "&nbsp;";
            //   let string = content.replace(/width="150"/g, "width='95%'")
              let result = content.replace(/&nbsp;/g, '');
              let result2 = result.split("The post");
            //  let result1 = result.replace(regex, '');
            GlobalVariables.content = content;
            GlobalVariables.title = title;
            this.props.navigation.navigate("Posts")

    }

    

    render(){
        let image = this.props.image;
        return(
            <TouchableOpacity onPress={() => this.onPress(image,this.props.content,this.props.title)}>
            <View style={styles.objava}>
            <View style={styles.kontainerslike}>
                 <Image
                    source={{uri:image}}
                    style={styles.slika}
                 />
            </View>
            <View style={styles.textBox}>
                 <Text style={styles.textObjave}>
                    {this.cutString(this.props.title)}
                 </Text>
                 {this.changeDate(this.props.date)}
                 <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
                 </View>
            </View>
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
        objava: {
            width: "94%",
            height: 100,
            marginBottom: 10,
            alignSelf: "center",
            flex: 2,
            flexDirection:'row',
            

        },
        kontainerslike: {
            height: "100%",
            width: "30%"

        },
        slika: {
            width: "100%",
            alignSelf: "center",
            height: "100%",
            width: "100%"

        },
        textObjave: {
            width: "40%",
            fontStyle: "italic",
            fontSize: 16,
            height: "83%"
            
        },
        textBox:{
            marginLeft: "3%",
        }


});


export default Objava;