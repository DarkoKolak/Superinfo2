import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Objava from './Objava.js'
import PocetnaObjava from "./PocetnaObjava.js"
import {Context} from "./Context.js";
import Drawer from 'react-native-drawer'
import SideBar from "../screens/SideBar.js";


class Fokus extends React.Component{

    state={
        posts: [],
        isLoading: false,
        page: 1,
    };

    closeControlPanel = () =>{
      this._drawer.close()
    };
    openControlPanel = () => {
      this._drawer.open()
    };


    checkifnew = (data,posts) =>{
      let newest = [];
      for(let i = data.length-1; i >= 0;i--){
        if(data[i].date > posts.date ){
          newest.unshift(data[i]);
        } 

      }
      if(newest.length > 0){
        this.setState({posts: [...newest, ...this.state.posts],isLoading: false })
      }else{
        this.setState({isLoading: false})
      }
    }

    onRefresh() {
        this.setState({ isLoading: true }, function() { this.getnewestPosts() 
       });
     }

     getnewestPosts = async() => {
      let page = this.state.page;
      const response = await fetch(
        `https://superinfo.ba/wp-json/wp/v2/posts?categories=6&per_page=10&page=1`,
      )
      const data = await response.json();
      this.checkifnew(data,this.state.posts);
   }

    getPosts = async() => {
        let page = this.state.page;
        const response = await fetch(
          `https://superinfo.ba/wp-json/wp/v2/posts?categories=6&per_page=10&page=${page}`,
        )
        const data = await response.json();
        this.setState({posts: page === 1 ? data : [...this.state.posts, ...data], isLoading: false})
     }

     handleLoadMore = () => {
        this.setState(
          {
            page: this.state.page + 1,
          },
          () => {
            this.getPosts();
          },
        );
      };

      renderFooter = () => {
        if (this.state.isLoading) return null;
        return (
          <View
            style={{
              paddingVertical: 20,
            }}
          >
            <ActivityIndicator animating size="large" />
          </View>
        );
      };


    componentDidMount(){

        this.getPosts();
    }


    render(){

        return(
          this.state.posts.length === 0 ?
              <View
                  style={{
                      flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: "white"
                  }}
                >
                  <ActivityIndicator animating size="large" />
                </View> :

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
                <FlatList
                onRefresh={() => this.onRefresh()}
                refreshing={this.state.isLoading}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0.1}
                style= {{marginTop: 20}}
                data={this.state.posts}
                keyExtractor={item => item.id + "a"}
                ListFooterComponent={this.renderFooter}
                renderItem={({item,index} ) =>
                <View>
                    {index===0? <PocetnaObjava navigation={this.props.navigation} content={item.content.rendered}
                     date={item.date_gmt} title={item.title.rendered} image={item.jetpack_featured_media_url}  />   :  
                     <Objava navigation={this.props.navigation} content={item.content.rendered}
                     date={item.date_gmt} title={item.title.rendered} image={item.jetpack_featured_media_url}  /> }
                </View>
                    }  />
                    </Drawer> ) }}
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

export default Fokus;