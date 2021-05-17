import React, { Component } from "react";
import {
    View,
    Text,
   
    KeyboardAvoidingView,
    ScrollView,
 
    Dimensions,
  
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';

import Header from '../../Commons/Header'

class PrivacyPolicyScreen extends Component {
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
                        <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Privacy Policy</Text>
                    </View>
                </View>
                <KeyboardAvoidingView behavior="padding">
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Who we are</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'left', fontSize: 14 }}>Our website address is: http://farmbers.appsondev.com.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>What personal data we collect and why we collect it</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Comments</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Media</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Contact forms</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Cookies</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Embedded content from other websites</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Analytics</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Who we share your data with</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>How long we retain your data</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>What rights you have over your data</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 24 }}>Where we send your data</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                            <Text style={{ textAlign: 'justify', fontSize: 16 }}>Visitor comments may be checked through an automated spam detection service.</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}>Your contact information</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}>Additional information</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}>How we protect your data</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}>What data breach procedures we have in place</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}>What third parties we receive data from</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}>What automated decision making and/or profiling we do with user data</Text>
                        </View>
                        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                            <Text style={{ textAlign: 'left', fontSize: 20 }}>Industry regulatory disclosure requirements</Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default PrivacyPolicyScreen;
