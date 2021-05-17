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
    FlatList,
    Modal,
    I18nManager,
    RefreshControl,
    fetchData,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
const DashboardDate = [
    {
        id: '1',
        name: 'Lok Shabha',
        image: Images.parlmnt
    },
    {
        id: '2',
        name: 'Lok Shabha',
        image: Images.parlmnt
    },
];
const Data = [
    {
        id: '1',
        name: 'Lok Shabha',
        image: Images.parlmnt
    },
    {
        id: '2',
        name: 'Lok Shabha',
        image: Images.parlmnt
    },
];
class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperBar}>
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
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.upperWrapper}>
                        <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Dashboard</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <View style={styles.docDetailedWrapper1}>
                        <View
                            style={[styles.docSpecsWrapper, { marginTop: 10 }]}>
                            <View style={styles.docNameWrapper}>
                                <View style={{ marginTop: 3, flexDirection: 'row', }}>
                                    <Text numberOfLines={1} style={{ position: 'absolute', fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Farm: NoidaFarm</Text>
                                    <Text numberOfLines={1} style={{ position: 'absolute', fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', left: '55%', color: 'green' }}>Village: Nurpur</Text>
                                </View>
                                <View style={{ marginTop: '10%', flexDirection: 'row' }}>
                                    <Text style={{ position: 'absolute', fontSize: width * 0.035, paddingBottom: 1, top: '10%' }}>Area: 5 Acer</Text>
                                    {/* <Text numberOfLines={1} style={{ position: 'absolute', left: "40%", fontSize: width * 0.035, color: 'green', paddingBottom: 1, top: '15%', fontWeight: 'bold', }} >{item.cons_name}</Text> */}
                                </View>
                                <View style={{ marginTop: '10%', flexDirection: 'row' }}>
                                    <Image source={Images.bhindi} style={styles.bhindiIcon} />
                                    <Text style={{ marginLeft: 50, fontSize: 20, fontWeight: 'bold', color: 'green' }}>
                                        Find Best Crop
                                                        </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                                        <Image source={Images.forward} style={styles.farwardIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <FlatList
                        // style=
                        // {{ marginBottom: '14%' }}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: '2%', paddingBottom: '55%' }}
                        data={Data}
                        renderItem={({ item }) => (
                            <>
                                <View style={styles.docDetailedWrapper1}>
                                    <View
                                        style={[styles.docSpecsWrapper, { marginTop: 10 }]}>
                                        <View style={styles.docNameWrapper}>
                                            <View style={{ marginTop: 3, flexDirection: 'row', }}>
                                                <Text numberOfLines={1} style={{ position: 'absolute', fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Farm: NoidaFarm</Text>
                                                <Text numberOfLines={1} style={{ position: 'absolute', fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', left: '55%', color: 'green' }}>Village: Nurpur</Text>
                                            </View>
                                            <View style={{ marginTop: '10%', flexDirection: 'row' }}>
                                                <Text style={{ position: 'absolute', fontSize: width * 0.035, paddingBottom: 1, top: '10%' }}>Area: 5 Acer</Text>
                                                {/* <Text numberOfLines={1} style={{ position: 'absolute', left: "40%", fontSize: width * 0.035, color: 'green', paddingBottom: 1, top: '15%', fontWeight: 'bold', }} >{item.cons_name}</Text> */}
                                            </View>
                                            <View style={{ marginTop: '10%', flexDirection: 'row' }}>
                                                <Image source={Images.bhindi} style={styles.bhindiIcon} />
                                                <View style={{ flexDirection: 'column' }}>
                                                    <Text style={{ marginLeft: 50 }}>
                                                        Crop : Bhindi
                                        </Text>
                                                    <Text style={{ marginLeft: 50 }}>
                                                        Stage : Irrigation
                                        </Text>
                                                </View>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('CropListScreen')}>
                                                    <Image source={Images.warning} style={styles.warnIcon} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        );
    }
}
export default Dashboard;
