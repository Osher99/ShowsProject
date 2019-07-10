import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ShowCard from './ShowCard';
import { connect } from 'react-redux';
import { fetchShows, textSearchChanged } from '../actions';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Spinner from 'react-native-loading-spinner-overlay';

const KEY_TO_FILTER = 'name';

class ShowList extends Component {
      
    _mounted = false;
    state ={
        spinner: true
    };

    componentWillUnmount () {
        this._mounted = false
        clearInterval(this.timer);
     }

    componentDidMount() {
        this._mounted = true;
        if(this._mounted) {
            this.props.fetchShows();
        this.timer = setInterval(() =>{
            this.setState({
                spinner: false
            });
        }, 3000);
    }
    }
    ontextChangedSearch(text) {
        this.props.textSearchChanged(text);
    }

    renderShows() {
        const { shows, search} = this.props;
        if (shows == []) {
            alert('No Internet connection, please try loading the app again');
            return (
                <View>
                    <Text>NO_INTERNET_CONNECTION</Text>
                </View>
            );
        }
        const filteredData = shows.filter(createFilter(search, KEY_TO_FILTER))
        return filteredData.map(
            show => 
            <ShowCard key={show.id} show={show} />           
          );
    }

    render() {
        return (
<View style={styles.containerStyle}>
<Spinner
            visible={this.state.spinner}
            textContent={'Loading Shows...'}
                />
<SearchInput 
        onChangeText={this.ontextChangedSearch.bind(this)}
        style={styles.searchInput}
          placeholder="Search..."
          value={this.props.search}
          />
    <ScrollView>
                {this.renderShows()}
            </ScrollView>
            </View>
        );
    }
}


const mapStateToProps = ({ fetch }) => {
    const { shows, search } = fetch;
  
    return  { shows, search };
  };

  const styles = {
    containerStyle: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'flex-start'
    },
    searchInput:{
        justifyContent: 'center',
        width:415,
        textAlign: 'center',
        justifyContent: 'center',
       fontSize: 20,
       backgroundColor: 'white',
      padding: 10,
      borderColor: 'grey',
      borderWidth: 3,
      alignItems: 'center',
      alignSelf: 'center',
    }
};

export default connect(mapStateToProps , { fetchShows, textSearchChanged })(ShowList);
