import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AvatarImage } from '../assets/index';

const Discover = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);


    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8" >
                <View>
                    <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
                    <Text className="text-[#527283] text-[36-px]">the beauty today</Text>
                </View>

                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
                    <Image source={AvatarImage}
                        className="w-full h-full rounded-md object-cover"
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Discover

