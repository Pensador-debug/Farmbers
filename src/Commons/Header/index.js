import React, { Component, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import { connect } from 'react-redux'
import { Images } from '../../utils';
import { profile } from '../../redux/actions/profile'
import AsyncStorage from '@react-native-community/async-storage';
class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatarSource: ''
        }
        this._getStorageValue();
    }
    async _getStorageValue() {
        var value = await AsyncStorage.getItem('token')
        if (value == null) {
            console.log(value)
            //   this.props.navigation.replace('Home')
        }
        this.getData(value);
        this.setState({ token: value });
        return value
    }
    async getData(token) {
        var avatar = AsyncStorage.getItem('profilepic')
        // console.log(this.props, 'shashank2')

        if (typeof avatar == 'string') {
            this.setState({
                avatarSource: avatar,
            })
        }
        else {
            this.props.profile(token)
                .then(() => {
                    if (this.props.profile1.avatar != '') {
                        if (typeof this.props.profile1.avatar != 'undefined' && this.props.profile1.avatar != 'undefined' && this.props.profile1.avatar != null)
                            AsyncStorage.setItem('profilepic', this.props.profile1.avatar)
                        if (typeof this.props.profile1.mobile != 'undefined' && this.props.profile1.mobile != 'undefined' && this.props.profile1.mobile != null)
                            AsyncStorage.setItem('mobile', this.props.profile1.mobile)
                        this.setState({
                            avatarSource: this.props.profile1.avatar,
                            mobile: this.props.profile1.mobile
                        })
                    }
                })
        }
    }

    render() {
        return (
            <View style={styles.upperBar}>
                {/* <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
               
                <Image source={Images.backIcon} style={styles.backContainerStyle} />
                </TouchableOpacity>

                </View> */}
                { this.props.back ?
                    <View style={{ marginLeft: -10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>

                            <Image source={Images.backIcon} style={styles.backContainerStyle} />
                        </TouchableOpacity>

                    </View>
                    : <></>
                }
                <View style={styles.logoContainer}>
                    <Image source={Images.farmLogo} style={styles.logoStyle} />
                </View>
                <View style={{ position: 'absolute', left: '70%', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('NotificationScreen')}>
                        <Image source={Images.bell} style={styles.bellIcon1} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('Profile')}>
                            <Image source={this.state.avatarSource ? { uri: this.state.avatarSource } : Images.profilePic} style={styles.profileIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 8 }}>
                        <TouchableOpacity onPress={() =>
                            this.props.navigation.navigate('ReferAndEarn', { mobile: this.state.mobile })}>
                            <Image source={Images.refer} style={styles.bellIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile1: state.profile.profile
    }
}

export default connect(mapStateToProps, { profile })(Header)
