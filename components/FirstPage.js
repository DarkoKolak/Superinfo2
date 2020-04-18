import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Objava from './Objava.js'
import PocetnaObjava from "./PocetnaObjava.js"


class FirstPage extends React.Component{

    state={
        posts: [],
        isLoading: false,
        categories: 6,
        allcategories: [6,5,9,2,3,31,7,10,8],
        count: 0,
        categoryName: "Fokus"
    };

    handleCategoryName(cat){
        switch(cat){
            case 6:
                return "Fokus";
            case 5:
                return "Život+";
            case 9:
                return "Sport";
            case 2:
                return "Majka i dijete";
            case 3:
                return "Dom i vrt";
            case 31:
                return "Eco";
            case 7:
                return "Scena";
            case 10:
                return "Gastro";
            case 8:
                return "Lifestyle";
            default:
                return "Fokus";                            
        }
    }

    onRefresh() {
        this.setState({ isLoading: true }, function() { this.getPosts() 
       });
     }

     getPosts2 = async() => {
         if(this.state.count <= this.state.allcategories.length -1){

            const response = await fetch(
                `https://superinfo.ba/wp-json/wp/v2/posts?categories=${this.state.categories}&per_page=5&page=1`,
              )
              const data = await response.json();
              this.setState({posts:  [...this.state.posts, ...data], isLoading: false})
              this.handleCategories();
              this.setState(
                {
                  categories: this.state.allcategories[this.state.count],
                });
                this.getPosts2();

         }else{
             return;
         }

     }

     handleCategories = () => {
         this.setState({
            count: this.state.count + 1
         }

         )
     }

    componentDidMount(){

        this.getPosts2();
    }


    render(){

        return(
            this.state.posts.length === 0 ?
            <View
                style={{
                    flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
                }}
              >
                <ActivityIndicator animating size="large" />
              </View> :
               <View style={styles.test}>
                    <FlatList
                    refreshing={this.state.isLoading}
                    onEndReachedThreshold={0.1}
                    data={this.state.posts}
                    keyExtractor={(item,index) => item.id + index + "a"}
                    renderItem={({item,index} ) =>
                        <View>
                            { index % 5 === 0 ? <View><Text style={styles.category}>  {this.handleCategoryName(item.categories[0])} </Text><View style={styles.line}></View><PocetnaObjava navigation={this.props.navigation} content={item.content.rendered} date={item.date_gmt} title={item.title.rendered} image={item.jetpack_featured_media_url}  /></View> : <Objava navigation={this.props.navigation} content={item.content.rendered} date={item.date_gmt} title={item.title.rendered} image={item.jetpack_featured_media_url}/> }
                        </View>
                             }  />
                </View>

        )
    }
}

const styles = StyleSheet.create({
    category: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
        marginTop: "2%",
        color: "red",
        marginBottom: "2%"
     },
        line: {
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
            marginBottom: "2%",
            alignSelf: "center"

        }

})

export default FirstPage;