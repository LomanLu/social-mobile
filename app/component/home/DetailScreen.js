import {Text, StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native'
import React, {Component} from 'react'
import {Navigation} from 'react-native-navigation'

const ScreenWidth = Dimensions.get('screen').width

export default class DetailScreen extends Component {

    static options() {
        return {

            topBar: {
                visible: false,
            },

        };
    }

    render() {
        const {url, width, height} = this.props
        const h = height * ScreenWidth / width
        return (
            <SafeAreaView>
                <View>
                    <ScrollView bounces={false}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={{uri: url}} style={{width: ScreenWidth, height: h}}/>

                            <Image source={require('../../assets/images/ic_menu.png')} style={{
                                right: 16,
                                top: 16,
                                position: 'absolute',
                                width: 25,
                                height: 25,
                                tintColor: 'white'
                            }}/>

                            <View style={{alignSelf: 'center', position: 'absolute', display: 'flex'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={require('../../assets/images/share.png')} style={{
                                        borderRadius: 15,
                                        width: 30,
                                        height: 30,
                                        backgroundColor: 'white',
                                        padding: 10,
                                        resizeMode: 'center'
                                    }}/>
                                    <Text style={{marginLeft: 12, color: 'white'}}>发送</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                                    <Image source={require('../../assets/images/refresh.png')} style={{
                                        borderRadius: 15,
                                        width: 30,
                                        height: 30,
                                        backgroundColor: 'white',
                                        padding: 10,
                                        resizeMode: 'center'
                                    }}/>
                                    <Text style={{marginLeft: 12, color: 'white'}}>再次观看</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={{position: 'absolute'}} onPress={() => {
                        Navigation.pop(this.props.componentId)
                    }}>
                        <Image source={require('../../assets/images/ic_back.png')} style={{
                            left: 16,
                            top: 16,
                            position: 'absolute',
                            width: 25,
                            height: 25,
                            tintColor: 'white'
                        }}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})
