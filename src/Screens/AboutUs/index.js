import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import Header from '../../Commons/Header'
class AboutUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.upperBar}>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.backIcon} style={styles.backContainerStyle} />
                        </TouchableOpacity>
                    </View>
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
                                <Image source={Images.profilePic} style={styles.profileIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 8 }}>
                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('ReferAndEarn')}>
                                <Image source={Images.refer} style={styles.bellIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
                 <Header {...this.props}  back={true}/>
                <View style={styles.wrapper}>
                    <View style={styles.upperWrapper}>
                        <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>About Us</Text>
                    </View>
                </View>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 18 }}>Farmbers® is a volunteer community forum where we invite everyone with genuine interest in
                            the development of farming – Agri students, Agri Technologists, Agriculturalists, Scientists, Social workers, Researchers etc to come and pool
                            in thoughts and ideas as community. This forum would enable these ideas to become accessible to all who can use them to make the change happen
                            at the farmland level – NGOs, Policy makers, Entrepreneurs and farmers themselves.As we grow and mature as a community, we would seek to come
                             together in regional forums as local farm-help groups to translate some of the ideas and thoughts into farm level actions.</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.boxBtn2}
                            onPress={() => this.props.navigation.navigate('MapScreen')}>
                            <Text style={styles.btnText}> DONE </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default AboutUs;
