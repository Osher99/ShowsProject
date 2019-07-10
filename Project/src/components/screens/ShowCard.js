import React from 'react';
import { Text, Image, Linking,  TouchableWithoutFeedback } from 'react-native';
import { CardSection, Button } from '../common';
import {  Card, Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const ShowCard = ({ show }) => {
    const { name, officialSite, image, premiered, rating} = show;
    const {
        headerContentStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (        

        <Card containerStyle={{width: 400}} >
                <TouchableWithoutFeedback
        onPress={() => {
          Actions.details({ show: show });
        }}>
        <Card >

            <CardSection>
                    <Image
                    style={imageStyle}
                    source={{ uri: image.original }} 
                    />
                    </CardSection>
            <Text style={styles.headerInfo}>{name}</Text>
            <Text style={styles.semiHeader}>Date Premiered: {premiered}</Text>
      </Card>     
       </TouchableWithoutFeedback>

            <CardSection>
            <Rating
                type="star"
                readonly
                startingValue={rating.average}
                ratingCount={10}
                imageSize={25}
                showRating
                onFinishRating={this.ratingCompleted}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(officialSite)}>
                    Offical Site
                    </Button>  
                 </CardSection>
                    <CardSection>
                    <Button  onPress={() => {
                  Actions.details({ show: show });
                }}> More Details
                    </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
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
        height: 400,
        flex: 1,
        width: null
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
    }
};

export default ShowCard;
