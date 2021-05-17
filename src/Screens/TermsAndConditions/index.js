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






class TermsAndConditions extends Component {
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
            <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Terms And Conditions </Text>
          </View>
        </View>

        <KeyboardAvoidingView behavior="padding">
          <ScrollView
            contentContainerStyle={styles.scrollWrapper}
            showsVerticalScrollIndicator={false}>

            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
              <Text style={{ textAlign: 'justify', fontSize: 20, }}>In relation to the use and access of the Farmbers app, its content and features, You agree  these terms and conditions and undertake the following:</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>The user shall disclose all material information in respect of all such property(s) submitted including the present status and nature of such property and shall also disclose whether the property is free from all encumbrances or not.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>The user in addition, shall furnish a brief background of such property in respect of title, ownership and possession.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>The user may further be required to substantiate his claims as to the nature and status of the property by swearing an affidavit stating the authenticity of the information/data so provided/displayed.</Text>
            </View>


            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>	Farmbers.com has at its sole discretion but without any obligation to, rights of searching for such and removing properties that are alleged to have been submitted in violation of these provisions.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>In addition to these documents/certificates/affidavits, Farmbers app reserves the right to demand furnishing of more evidences or terminate the contracts/accounts and forbid the user access of users who repeatedly violate these Terms and Conditions.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>	Farmbers may also require the customer to support his/her claims with respect to the status of the property with such documents as may be specified by it from time to time.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>The Users agree to allow the property listing, or any part of it, to be searched, displayed, accessed, downloaded, copied, and otherwise referred to by all the users of this website.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Farmbers App shall have the sole authority to choose the manner in which any property will be searched, displayed, accessed, downloaded, copied, and otherwise used and shall have the right to modify the property listing in the exercise of its rights under these clauses/agreement.</Text>
            </View>










            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>The user agrees to represent and warrant that all properties and associated information provided by the user are accurate.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Farmbers App reserves, in a manner consistent with reasonable commercial business practices, the right to remove all or any part of the properties posted on this app or any of its affiliated/microsite portals.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Farmbers App shall take all reasonable efforts for data backup and business resumption, however, the user will be solely responsible for retaining back-up copies of all information, photographs and other materials furnished/submitted.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>	Customers, who are buying/renting property/properties through Farmbers App, must verify details the property/properties as well as its right, title, ownership, lien etc. on their own</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>	Other than when acting as a broker advertising a real estate property on the Website, upload, transmit or publish any information on behalf of a third party, including any User Information of any person other than You, and more specifically, You will not impersonate another person.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Upload, transmit or publish any information or material which is threatening, abusive, obscene, derogatory (in any form), defamatory or libelous, discriminatory, racially or ethnically objectionable or contains pornography is strictly debarred</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Violating the privacy or publish any personal information of any person except to the extent specifically (officially/legally) approved by such person and only to the extent absolutely necessary to advertise that such person real estate property is available for rentals/sale/lease is strictly debarred</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Upload, transmit or publish any viruses or other malware, to corrupt, interrupt, limit, destroy or otherwise impact the Website, the Company computer systems, or the computer systems of other users or third party systems is strictly debarred</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Upload transmit or publish anything which You do not have the rights to or any material which infringes the intellectual property rights (in whatever form) of any third party is strictly debarred</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Use the Website in any manner which is not permitted under these Terms and Conditions or in any manner which is illegal or unethical is strictly debarred</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Access the Website in any unauthorized manner, including by hacking or using log in credentials of any other user is strictly debarred</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>	Using the Farmbers App for any unauthorized marketing purposes or for sending any unsolicited materials is strictly prohibited and the users of Farmbers are subject to Farmbers privacy policy.</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>If any of your actions on the Website or materials posted by you on the Website are inferred/flagged as inappropriate, the website reserves the right to review such actions or content to determine, in its sole and absolute discretion, whether it violates these Terms and Conditions. If the website removes your content or disables your account and/or access to the Website, you may assume that such removal or disablement was purposeful on the part of the website. The website may, additionally refuse to let you re-register on and/or use the features and functionalities of the Website as its sole option.</Text>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
              <Text style={{ textAlign: 'justify', fontSize: 20, fontWeight: 'bold', }}>Technical or on-line issues:</Text>
            </View>
            <View style={{ marginRight: 20, marginTop: 10, flexDirection: 'row' }}>
              <Image source={Images.dot} style={styles.dotIcon} />
              <Text style={{ textAlign: 'justify', fontSize: 16, marginLeft: 8, marginRight: 10 }}>Farmbers shall not be responsible for any problem or technical malfunction of on-line-systems, servers or providers, computer equipment, software, failure of e-mail or players on account of technical problem or traffic congestion on the Internet or at any website or combination thereof, including injury or damage to any customer and/or members or to any other person/computer related to or resulting from participating or downloading materials/information from this website. This App is controlled and operated from India and Farmbers makes no representation that the materials are appropriate or will be available for use in other parts of the World.</Text>
            </View>






          </ScrollView>
        </KeyboardAvoidingView>

      </View>
    );
  }
}
export default TermsAndConditions;


