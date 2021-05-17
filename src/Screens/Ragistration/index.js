import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Picker, Alert, Animated
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { register } from '../../redux/actions/registration';
import { connect } from 'react-redux';
import LoadingIcon from '../../components/LoadingIcon';
class Ragistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingApp: false,
            mobile: '',
            loader: true,
            animating: false,
            alignsecond: false,
            loaderText1: 'Initializing.',
            // loaderText2: '',
            // loaderText3: ''
        }
        this._getStorageValue();
        setTimeout(
            () => {
                this.setState({ align: 'flex-start' }, function () {
                    this.setState({
                        alignsecond: true,
                    });
                }), this.animatedBox()
            },
            2000
        );
        setTimeout(
            () => {
                this.setState({ loaderText1: 'Initializing..' })
            },
            3000
        );
        setTimeout(
            () => {
                this.setState({ loaderText1: 'Initializing...' })
            },
            4000
        );
        setTimeout(
            () => {
                this.setState({ loaderText1: 'Checking GPS.' })
            },
            5000
        );
        setTimeout(
            () => {
                // this.setState({ loaderText1: 'Initializing..' })
                this.setState({ loaderText1: 'Checking GPS..' })
            },
            6000
        );
        setTimeout(
            () => {
                // this.setState({ loaderText1: 'Initializing..' })
                this.setState({ loaderText1: 'Checking GPS...' })
                // this.setState({ loaderText3: 'Locating..' })
            },
            7000
        );
        setTimeout(
            () => {
                // this.setState({ loaderText1: 'Initializing..' })
                this.setState({ loaderText1: 'Locating.' })
                // this.setState({ loaderText3: 'Locating..' })
            },
            8000
        );
        setTimeout(
            () => {
                // this.setState({ loaderText1: 'Initializing..' })
                this.setState({ loaderText1: 'Locating..' })
                // this.setState({ loaderText3: 'Locating..' })
            },
            9000
        );
        setTimeout(
            () => {
                // this.setState({ loaderText1: 'Initializing..' })
                // this.setState({ loaderText2: 'Checking GPS..' })
                this.setState({ loaderText1: 'Locating...' })
            },
            10000
        );
        // setTimeout(
        //     () => {
        //         // this.setState({ loaderText1: 'Initializing..' })
        //         // this.setState({ loaderText2: 'Checking GPS..' })
        //         this.setState({ loaderText3: 'Locating..' })
        //     },
        //     11000
        // );
        // setTimeout(
        //     () => {
        //         // this.setState({ loaderText1: 'Initializing..' })
        //         // this.setState({ loaderText2: 'Checking GPS..' })
        //         this.setState({ loaderText3: 'Locating...' })
        //     },
        //     12000
        // );
        setTimeout(
            async () => {
                this.setState({ loader: false })
                await AsyncStorage.setItem('registrationloader', '1')
            }, 11000
        )
    }
    componentDidMount() {
        this.animatedWidth = new Animated.Value(300)
        this.animatedHeight = new Animated.Value(300)
    }
    animatedBox = () => {
        Animated.timing(this.animatedWidth, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false
        }).start()
        Animated.timing(this.animatedHeight, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }
    async _getStorageValue() {
        var value = await AsyncStorage.getItem('token')
        var loader = await AsyncStorage.getItem('registrationloader')
        if (loader != null) {
            // this.setState({ loader: false })
        }
        if (value != null) {
            console.log(value)
            this.props.navigation.replace('Lands')
            // this.props.navigation.replace('DashboardMap')
        }
        return value
    }
    submitNext() {
        if (this.state.mobile.length > 9 && this.state.mobile.length < 13) {
            this.setState({ loadingApp: true })
            this.props.register(this.state).then(async () => {
                this.setState({ loadingApp: false })
                console.log(this.props.register1)
                if (this.props.register1.name == 1) {
                    this.props.navigation.replace('OtpScreen', { mobile: this.state.mobile })
                }
                else if (this.props.register1.name == 0) {
                    this.props.navigation.replace('Login', { mobile: this.state.mobile })
                }
                else {
                    Alert.alert(
                        'Farmbers',
                        'Something Went Wrong',
                    )
                }
            })
        }
        else {
            Alert.alert(
                'Farmbers',
                'Please check your Mobile Number',
            )
        }
    }
    loadingRender() {
        if (this.state.loadingApp) {
            return (
                <LoadingIcon />
            )
        }
    }
    render() {
        if (this.state.loader == true) {
            return (<>{this.loaderRender()}</>)
        }
        else
            return (
                <>{this.contentRender()}</>
            )
    }
    contentRender() {
        return (
            <View style={styles.container}>
                {this.loadingRender()}
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.header}>
                            <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '25%' }}><Text style={{ color: '#006631', fontWeight: 'bold', fontSize: 30 }}>Welcome to Farmbers</Text></View>
                        <View style={{ marginTop: height * 0.15, alignItems: 'center', }}>
                            <View style={styles.formBox}>
                                <Image source={Images.phone} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" autoCapitalize='none' keyboardType={"numeric"}
                                    style={styles.input} placeholder="Enter Phone Number"
                                    onChangeText={mobile => this.setState({ mobile })}
                                    value={this.state.mobile}
                                />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.07 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.boxBtn2}
                                onPress={() => this.submitNext()}>
                                <Text style={styles.btnText}> NEXT </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
    loaderRender() {
        const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight, alignItems: 'center', justifyContent: 'center' }
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginHorizontal: 40,
                    justifyContent: 'center'
                }}>
                <Animated.View style={[animatedStyle]}>
                    <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
                </Animated.View>
                {!this.state.alignsecond ? null : (
                    this.renderText()
                )}
            </View>
        );
    }
    renderText() {
        return (<View style={{ margin: 10, alignItems: 'center', marginTop: 50 }}>
            <Text
                style={{ color: '#006631', fontSize: 20, fontWeight: 'bold' }}>
                {this.state.loaderText1}
            </Text>
            <Text
                style={{ color: '#006631', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                {this.state.loaderText2}
            </Text>
            <Text
                style={{ color: '#006631', fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>
                {this.state.loaderText3}
            </Text>
        </View>)
    }
}
const mapStateToProps = (state) => {
    return {
        register1: state.register.register
    };
};
export default connect(mapStateToProps, {
    register
})(Ragistration);
