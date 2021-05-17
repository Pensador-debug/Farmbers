import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, FlatList
} from "react-native";
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
import { Images } from '../../utils'
import styles from './style';
import SpalshBstCrp from "../SpalshBstCrp";

import Header from '../../Commons/Header';
import AsyncStorage from '@react-native-community/async-storage';
import { home } from '../../redux/actions/home';
import { connect } from 'react-redux';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            land_id: '',
            latitude: this.props.route.params.latitude,
            longitude: this.props.route.params.longitude,
            pincode: this.props.route.params.pincode,

            loadingSpl: true,
            home: []
        };
        this._getStorageValue();
        // console.log(this.props.route.params.latitude, this.props.route.params.longitude, this.props.route.params.pincode, 'yahah hye log naye wale')
    }
    async _getStorageValue() {
        if (typeof this.props.route.params.land_id == 'number') {
            this.setState({ land_id: this.props.route.params.land_id })
        }
        var value = await AsyncStorage.getItem('token')
        if (value == null) {
            console.log(value)
        }
        console.log(value)
        this.getData(value);
        this.setState({ token: value });
        return value
    }
    getData(token) {
        this.props.home(token)
            .then(() => {
                console.log(this.props.home1)
                this.setState({ home: this.props.home1 })

            })
    }
    componentDidMount() {
        this.showSpl();
    }
    // componentWillUnmount() {
    //   clearTimeout(this.splTimeout);
    // }
    showSpl = () => {
        this.getStorage
        this.splTimeout = setTimeout(() => {
            this.setState({ loadingSpl: false, });
        }, 7000);
    }
    render() {
        if (this.state.loadingSpl) {
            return <SpalshBstCrp />
        }
        return (
            <View style={styles.container}>
                <Header {...this.props} back={true} />
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.wrapper}>
                            <View style={styles.upperWrapper}>
                                <Text style={{ fontSize: 24, color: '#fff' }}>Best Crops for you</Text>
                            </View>
                            {this.state.home.length > 0 ? <View style={{ width: width * 1 }}>
                                {this.state.home[0] ?
                                    <View style={{ width: '95%', alignItems: 'flex-end', marginTop: '8%' }}>
                                        <Animatable.View animation="bounceInRight" duration={4000}
                                            style={{ flex: 1, }}>
                                            <TouchableOpacity
                                                //  onPress={() => this.props.navigation.navigate('AnalysisScreen', { crop_id: this.state.home[0].id, land_id: this.props.route.params.land_id })} style={{}}
                                                onPress={() => {
                                                    console.log(this.state.home[0].id);
                                                    this.props.navigation.replace('AnalysisScreen', { crop_id: this.state.home[0].id, land_id: this.props.route.params.land_id, crop_name: this.state.home[0].crop_name, latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })
                                                }
                                                } style={{}}
                                            >
                                                <View style={{ padding: 10, justifyContent: 'center', backgroundColor: '#006631', borderRadius: 100, marginRight: 10, minWidth: height * 0.2, minHeight: height * 0.2 }}>
                                                    <Image source={{ uri: this.state.home[0]?.crop_image }} style={{ height: height * 0.22, width: height * 0.22, borderRadius: 100, }} />
                                                </View></TouchableOpacity>
                                        </Animatable.View>
                                    </View>
                                    : <></>}
                                {this.state.home[1] ?
                                    <View style={{ width: '95%', alignItems: 'flex-start', }}>
                                        <Animatable.View animation="bounceInRight" duration={4000}
                                            style={{ flex: 1, }}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.replace('AnalysisScreen', { crop_id: this.state.home[1].id, land_id: this.props.route.params.land_id, crop_name: this.state.home[1].crop_name, latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })} style={{}}
                                            >
                                                <View style={{ padding: 10, justifyContent: 'center', backgroundColor: '#006631', borderRadius: 100, marginRight: 10, minWidth: height * 0.2, minHeight: height * 0.2 }}>
                                                    <Image source={{ uri: this.state.home[1]?.crop_image }} style={{ height: height * 0.2, width: height * 0.2, borderRadius: 100, }} />
                                                </View></TouchableOpacity>
                                        </Animatable.View>
                                    </View>
                                    : <></>}
                                {this.state.home[2] ?
                                    <View style={{ width: '95%', alignItems: 'flex-end', marginBottom: 20 }}>
                                        <Animatable.View animation="bounceInLeft" duration={4000}
                                            style={{ flex: 1, }}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.replace('AnalysisScreen', { crop_id: this.state.home[2].id, land_id: this.props.route.params.land_id, crop_name: this.state.home[2].crop_name, latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })} style={{}}
                                            >
                                                <View style={{ padding: 10, justifyContent: 'center', backgroundColor: '#006631', borderRadius: 100, marginRight: 10, minWidth: height * 0.15, minHeight: height * 0.15 }}>
                                                    <Image source={{ uri: this.state.home[2]?.crop_image }} style={{ height: height * 0.15, width: height * 0.15, borderRadius: 100, }} />
                                                </View></TouchableOpacity>
                                        </Animatable.View>
                                    </View>
                                    : <></>}
                            </View>
                                :
                                <>
                                    <View style={styles.docDetailedWrapper3}>
                                        <View style={styles.docNameWrapper}>
                                            <Text style={styles.docNameText}>
                                                !!! No Crop Found !!!
                                            </Text>
                                        </View>
                                    </View>
                                </>}
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        home1: state.home.home,
    };
};
export default connect(mapStateToProps, {
    home
})(Home);