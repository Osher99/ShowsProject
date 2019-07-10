import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';
import { CardSection, Button, Header } from '../common';
import {  Card, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';

class DetailPage extends Component {
 

    renderGeneres() {
        return this.props.show.genres.map(
                genere => 
                <Text key={this.props.show.genres.indexOf(genere)} style={styles.semiHeader}>{genere},</Text> 
        );
    }

    render() {
        const { show } = this.props;
        console.log(show);

        return (
            <ScrollView style={{flexGrow: 1}}>
        <View style={styles.containerStyle}>
         <Card title={show.name}> 
         <Text style={styles.headerStyle}>{show.name}</Text>
                <Card>
                    <CardSection>
                    <Image
                    style={styles.imageStyle}
                    source={{ uri: show.image.original }}
                    /></CardSection>
                </Card>
                <Card>
                    <Text style={styles.semiHeader}>
                        {show.summary}
                    </Text>
                </Card>
                <Card>
                    <CardSection>
                       <Text style={styles.categoryStyle}>Generes: </Text><Text style={styles.semiHeader}>  {this.renderGeneres()}</Text>
                    </CardSection>
                    <CardSection>
                    <Text style={styles.categoryStyle}>Langauge: </Text><Text style={styles.semiHeader}> {show.language} </Text>
                    </CardSection>
                    <CardSection>
                    <Text style={styles.categoryStyle}>Air Time: </Text><Text style={styles.semiHeader}> {show.schedule.days[0]} at {show.schedule.time}</Text>
                    </CardSection>
                    <CardSection>
                    <Text style={styles.categoryStyle}>Channel: </Text><Text style={styles.semiHeader}> {show.network.name} {show.network.id}</Text>
                    </CardSection>
                    <CardSection>
                    <Text style={styles.categoryStyle}>Country: </Text><Text style={styles.semiHeader}> {show.network.country.name}</Text>
                    </CardSection>
                    </Card>

                    <Card>
                    <Rating
                type="star"
                readonly
                startingValue={show.rating.average}
                ratingCount={10}
                imageSize={25}
                showRating
                onFinishRating={this.ratingCompleted}/>
                    </Card>
                    <Card>
                    <CardSection style={{justifyContent: 'center'}}>
                    <Button style={{justifyContent: 'center'}} onPress={() => Linking.openURL(`https://www.imdb.com/title/${show.imdb}`)}>
                        <Icon name="imdb" color="white" size={30} style={{ height: 40, width: 40, paddingLeft: 50 }}/>  Link To IMDB</Button>
                        </CardSection>
                    <CardSection style={{justifyContent: 'center'}}>
                    
                        <Button style={{justifyContent: 'center'}} onPress={() => Linking.openURL(show.officalSite)}>
                            <Icon name="home" color="white" size={30} style={{ height: 40, width: 40, paddingLeft: 50 }}/>  Official Site</Button>
                    </CardSection>
                    </Card>
                    </Card>
            </View>
            </ScrollView>
        );
    }
}
const styles = {
    containerStyle: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
        headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 500,
        flex: 1,
        width: null
    },
    headerStyle: {
        fontSize: 30,
        fontFamily: 'Thomba',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    headerInfo: {
        fontSize: 20,
        fontFamily: 'Thomba',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    semiHeader: {
        fontSize: 15,
        fontFamily: 'Thomba',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    categoryStyle: {
        fontSize: 15,
        textDecorationLine: "underline",
        fontFamily: 'Thomba',
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    }
};

export default DetailPage;