import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    I18nManager,
    SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get('window');
const scalesPageToFit = Platform.OS === 'android';
import { Images } from '../../utils';
import styles from './style';
import Header from '../../Commons/Header';
import { dashboard } from '../../redux/actions/dashboard';
import { magiccircle } from '../../redux/actions/magiccircle';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

import { connect } from 'react-redux';

import MapView, { PROVIDER_GOOGLE, MarkerAnimated, Circle, Polygon, AnimatedRegion } from 'react-native-maps';

class DashboardMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showAlert: false,
            latitude: 26.1511547,
            longitude: 85.4340188,
            token: '',
            magiccircle: [],

        };

        this._getStorageValue();

    }
    showAlert = () => {
        this.setState({
            showAlert: true,
        });
    };
    hideAlert = () => {
        this.setState({
            showAlert: false,
        });

    };
    async _getStorageValue() {
        var value = await AsyncStorage.getItem('token')
        console.log(value, 'token to hai ') //for token
        this.setState({ token: value });
        this.getData(value);
        return value
    }
    getData(token) {
        this.props.magiccircle(this.state)
            .then(() => {
                // console.log(this.props.magiccircle1, 'jai bhadrakali')
                this.setState({ magiccircle: this.props.magiccircle1 })
                // if (typeof this.state.magiccircle1[0]?.latitude == 'string')
                //     this.setState({ latitude: Number(this.state.magiccircle1[0]?.latitude), longitude: Number(this.state.magiccircle1[0]?.longitude) })
            })
        this.props.dashboard(token)
            .then(() => {

                this.setState({ dashboardmap: this.props.dashboard1 })
                // console.log(typeof this.state.dashboardmap[0]?.latitude,'kya ye khali h?')
                if (typeof this.state.dashboardmap[0]?.latitude == 'string')
                    this.setState({ latitude: Number(this.state.dashboardmap[0]?.latitude), longitude: Number(this.state.dashboardmap[0]?.longitude) })
                else {
                    if (this.props.dashboard1.length < 1)
                        this.props.navigation.replace('PincodeScreen')
                }


                this.map.animateCamera(this.state)

                // console.log(this.state.dashboardmap, 'yaha h id..................')
                //  this.setState({ crop_id:this.state.dashboardmap.id})
                //  console.log(this.state.dashboardmap[0].id, 'yaha h id222222..................')

            })
        // console.log(this.state)

    }
    renderMarker() {
        var coordinates = (this.props.dashboard1)


        var herodata = coordinates.map((element, i) => {
            var mc_id = element.magic_circle_id
            var circle = {}
            if (mc_id != 0) {
                this.state.magiccircle.forEach(element1 => {
                    if (element1.id == mc_id) {
                        circle = element1
                    }

                });
                // console.log(circle,'ya ye khali h???????')

                var coords = circle;
                if (typeof Number(coords.latitude) == 'number') {
                    console.log(Number(coords[0]), Number(coords[1]), 'shashank')

                    return < MapView.Marker
                        coordinate={{
                            latitude: Number(coords.latitude) ? Number(coords.latitude) + (i / 200) : 0,
                            longitude: Number(coords.longitude) ? Number(coords.longitude) : 0,

                        }

                        }

                        onPress={() => { this.props.navigation.navigate('CropListScreen', { crop_id: coords.crop_id }) }}
                        title={(coords.land_name)}
                        pinColor={(coords.color)}
                        crop_id={(coords.crop_id)}


                    />

                }
                else
                    return;
            }
            else
                return;

        })
        return <>{herodata}</>
        // }
    }
    renderCircle() {
        var centers = (this.props.magiccircle1)
        // console.log(centers, 'shashankshekahr')
        var herodata = centers.map((element, i) => {
            var coords = element;

            if (typeof Number(coords.latitude) == 'number') {
                // console.log(Number(coords[0]), Number(coords[1]), 'shashank')
                return < MapView.Circle
                    center={{
                        latitude: Number(coords.latitude) ? Number(coords.latitude) : 0,
                        longitude: Number(coords.longitude) ? Number(coords.longitude) : 0,
                    }}
                    radius={20000}
                    strokeColor="#006631"
                    strokeWidth={1}
                    fillColor="rgba(0, 110, 49,0.1)"
                />
            }
            else
                return;
        })
        return <>{herodata}</>
    }
    render() {
        var mapStyle = [
            { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#F9E9D0" }] },
        ];
        return (
            <SafeAreaView style={styles.container}>
                <Header {...this.props}
                />
                <View style={styles.wrapper}>
                    <View style={styles.upperWrapper}>
                        <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Dashboard</Text>
                    </View>
                </View>
                <View style={{ width: width * 1 }} >
                    <MapView
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.8922,
                            longitudeDelta: 0.4421,
                        }}
                        showsTraffic={false}
                        provider={PROVIDER_GOOGLE}
                        // mapType={'satellite'}
                        showToolbar={true}
                        showsUserLocation
                        paddingAdjustmentBehavior={'always'}
                        customMapStyle={mapStyle}
                        mapPadding={{
                            // top: 50,
                            right: 50,
                            bottom: 100,
                            left: 50
                        }}
                        style={styles.maparea}
                        ref={ref => this.map = ref}
                    >
                        {this.renderMarker()}
                        {this.renderCircle()}
                    </MapView>
                </View>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title={'FARMBERS'}
                    titleStyle={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}
                    message={this.state.message}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    //showCancelButton={true}
                    showConfirmButton={true}
                    confirmText="Okay"
                    confirmButtonColor="#006631"
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dashboard1: state.dashboard.dashboard,
        magiccircle1: state.magiccircle.magiccircle,
    };
};
export default connect(mapStateToProps, {
    dashboard, magiccircle,
})(DashboardMap);
