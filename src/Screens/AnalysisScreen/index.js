import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
} from "react-native";
import {
    LineChart,
} from "react-native-chart-kit";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
import { Tab, Tabs, TabHeading, } from 'native-base';
import Header from '../../Commons/Header';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require('../../assets/en-US.json'),
    hi: () => require('../../assets/hi.json'),
};
const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);
class AnalysisScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            land_id: this.props.route.params.land_id,
            crop_id: this.props.route.params.crop_id,
            crop_name: this.props.route.params.crop_name,
            latitude: this.props.route.params.latitude,
            longitude: this.props.route.params.longitude,
            pincode: this.props.route.params.pincode,
        }; 
        console.log(this.props.route.params.latitude, this.props.route.params.longitude, this.props.route.params.pincode, 'yahah hye log naye wale')
        console.log(this.props.route.params, "yaha h ids")
        console.log(this.state, "yaha h ids")
        // this._getStorageValue();
    }
    // async _getStorageValue() {
    //     if (typeof this.props.route.params.land_id == 'number') {
    //         this.setState({ land_id: this.props.route.params.land_id })
    //         console.log(this.props.route.params.land_id, 'ye h land id baba')
    //     }
    // }
    componentWillUnmount() {
        this.setState({
            land_id: '',
            crop_id: '',
            crop_name: '',
            latitude: '',
            longitude: '',
            pincode: '',
        })
        this.props.route.params = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} back={true} />
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.wrapper}>
                            <View style={styles.upperWrapper}>
                                <Text style={{ fontSize: 24, color: '#fff' }}>{this.state.crop_name}</Text>
                            </View>
                            <Tabs tabBarUnderlineStyle={{ backgroundColor: 'yellow' }} tabContainerStyle={{ backgroundColor: '#006631', marginTop: 10 }}>
                                <Tab heading={<TabHeading style={{ backgroundColor: '#006631' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 20, marginTop: 5, color: '#fff', }}> {translate('history')}</Text>
                                    </View>
                                </TabHeading>} activeTextStyle={{ color: '#000', fontWeight: 'normal' }} activeTabStyle={{ backgroundColor: '#000' }}>
                                    <View style={{ height: height * 1 }}>
                                        <View style={{ width: '100%', marginTop: '7%' }}>
                                            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{translate('avg_demand')}</Text>
                                            <LineChart
                                                data={{
                                                    labels: ["Jan", "Feb", "March", "April", "May", "June"],
                                                    datasets: [
                                                        {
                                                            data: [
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100,
                                                                Math.random() * 100
                                                            ]
                                                        }
                                                    ]
                                                }}
                                                width={Dimensions.get("window").width} // from react-native
                                                height={170}
                                                yAxisLabel="+"
                                                yAxisSuffix="'c"
                                                yAxisInterval={1} // optional, defaults to 1
                                                chartConfig={{
                                                    backgroundColor: "#F5F5F5",
                                                    backgroundGradientFrom: "#F5F5F5",
                                                    backgroundGradientTo: "#F5F5F5",
                                                    decimalPlaces: 0, // optional, defaults to 2dp
                                                    color: (opacity = 1) => '#DCDCDC',
                                                    labelColor: (opacity = 1) => '#808080',
                                                    style: {
                                                        // borderRadius: 10,
                                                    },
                                                    propsForDots: {
                                                        r: "3",
                                                        strokeWidth: "1",
                                                        stroke: "#ffa726"
                                                    }
                                                }}
                                                bezier
                                                style={{
                                                    marginVertical: 20,
                                                    // borderRadius: 16
                                                }}
                                            />
                                        </View>
                                        <View>
                                            <View style={{ width: '100%', marginTop: '1%' }}>
                                                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{translate('avg_supply')}</Text>
                                                <LineChart
                                                    data={{
                                                        labels: ["Jan", "Feb", "March", "April", "May", "June"],
                                                        datasets: [
                                                            {
                                                                data: [
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100
                                                                ]
                                                            }
                                                        ]
                                                    }}
                                                    width={Dimensions.get("window").width} // from react-native
                                                    height={180}
                                                    yAxisLabel="+"
                                                    yAxisSuffix="'c"
                                                    yAxisInterval={1} // optional, defaults to 1
                                                    chartConfig={{
                                                        backgroundColor: "#F5F5F5",
                                                        backgroundGradientFrom: "#F5F5F5",
                                                        backgroundGradientTo: "#F5F5F5",
                                                        decimalPlaces: 0, // optional, defaults to 2dp
                                                        color: (opacity = 1) => '#DCDCDC',
                                                        labelColor: (opacity = 1) => '#808080',
                                                        style: {
                                                            // borderRadius: 10,
                                                        },
                                                        propsForDots: {
                                                            r: "3",
                                                            strokeWidth: "1",
                                                            stroke: "#ffa726"
                                                        }
                                                    }}
                                                    bezier
                                                    style={{
                                                        marginVertical: 20,
                                                        // borderRadius: 16
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.02 }}>
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                style={styles.boxBtn2}
                                                onPress={() => this.props.navigation.replace('CropLockScreen', { land_id: this.state.land_id, crop_id: this.state.crop_id, crop_name: this.state.crop_name, latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })}>
                                                <Text style={styles.btnText}>Click to Lock {this.state.crop_name} </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Tab>
                                <Tab heading={<TabHeading style={{ backgroundColor: '#006631' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 20, marginTop: 5, color: '#fff' }}>{translate('forecast')}</Text>
                                    </View>
                                </TabHeading>}>
                                    <View style={styles.TabView}>
                                        <View style={{ height: height * 1 }}>
                                            <View style={{ width: '100%', marginTop: '7%' }}>
                                                <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{translate('avg_demand')}</Text>
                                                <LineChart
                                                    data={{
                                                        labels: ["Jan", "Feb", "March", "April", "May", "June"],
                                                        datasets: [
                                                            {
                                                                data: [
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100,
                                                                    Math.random() * 100
                                                                ]
                                                            }
                                                        ]
                                                    }}
                                                    width={Dimensions.get("window").width} // from react-native
                                                    height={200}
                                                    yAxisLabel="+"
                                                    yAxisSuffix="'c"
                                                    yAxisInterval={1} // optional, defaults to 1
                                                    chartConfig={{
                                                        backgroundColor: "#F5F5F5",
                                                        backgroundGradientFrom: "#F5F5F5",
                                                        backgroundGradientTo: "#F5F5F5",
                                                        decimalPlaces: 0, // optional, defaults to 2dp
                                                        color: (opacity = 1) => '#DCDCDC',
                                                        labelColor: (opacity = 1) => '#808080',
                                                        style: {
                                                            // borderRadius: 10,
                                                        },
                                                        propsForDots: {
                                                            r: "3",
                                                            strokeWidth: "1",
                                                            stroke: "#ffa726"
                                                        }
                                                    }}
                                                    bezier
                                                    style={{
                                                        marginVertical: 20,
                                                        // borderRadius: 16
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <View style={{ width: '100%', marginTop: '7%' }}>
                                                    <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{translate('avg_supply')}</Text>
                                                    <LineChart
                                                        data={{
                                                            labels: ["Jan", "Feb", "March", "April", "May", "June"],
                                                            datasets: [
                                                                {
                                                                    data: [
                                                                        Math.random() * 100,
                                                                        Math.random() * 100,
                                                                        Math.random() * 100,
                                                                        Math.random() * 100,
                                                                        Math.random() * 100,
                                                                        Math.random() * 100
                                                                    ]
                                                                }
                                                            ]
                                                        }}
                                                        width={Dimensions.get("window").width} // from react-native
                                                        height={200}
                                                        yAxisLabel="+"
                                                        yAxisSuffix="'c"
                                                        yAxisInterval={1} // optional, defaults to 1
                                                        chartConfig={{
                                                            backgroundColor: "#F5F5F5",
                                                            backgroundGradientFrom: "#F5F5F5",
                                                            backgroundGradientTo: "#F5F5F5",
                                                            decimalPlaces: 0, // optional, defaults to 2dp
                                                            color: (opacity = 1) => '#DCDCDC',
                                                            labelColor: (opacity = 1) => '#808080',
                                                            style: {
                                                                // borderRadius: 10,
                                                            },
                                                            propsForDots: {
                                                                r: "3",
                                                                strokeWidth: "1",
                                                                stroke: "#ffa726"
                                                            }
                                                        }}
                                                        bezier
                                                        style={{
                                                            marginVertical: 20,
                                                            // borderRadius: 16
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ justifyContent: 'space-around', alignItems: 'center', marginTop: height * 0.02, flexDirection: 'row' }}>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxBtn3}
                                                    onPress={() => this.props.navigation.navigate('AddLand')}
                                                >
                                                    <Text style={styles.btnText}>Change magic circle</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={styles.boxBtn3}
                                                    onPress={() => this.props.navigation.navigate('CropLockScreen', { land_id: this.state.land_id, crop_id: this.state.crop_id, crop_name: this.state.crop_name, latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })}>
                                                    <Text style={styles.btnText}> Lock {this.state.crop_name} </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </Tab>
                            </Tabs>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default AnalysisScreen;
``