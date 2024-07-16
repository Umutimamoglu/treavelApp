import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../assets/index';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/* first section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-2xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2A2b4b] text-3xl font-semibold">Travel</Text>
            </View>
            {/* second section */}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3c6072]">Benim eğlenceli bir seyahate çık!</Text>
                <Text>İyi Anlar!!!</Text>
                <Text className="text-[#3c6072] text-base">
                    lorem10şfgklrödsfgödsloşfmödsşlfamsdfşldsfklşsafmkldsa
                    fdsfdsf
                    fdsfdfsdfdsfdsf
                </Text>
            </View>
            {/* circle section */}
            <View className="w-[350px] h-[350px] bg-[#00bcc9] rounded-full absolute bottom-36 -right-36" >
            </View>
            <View className="w-[350px] h-[350px] bg-[#e99265] rounded-full absolute -bottom-28 -left-36">
            </View>

            {/* Image Container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                    animation="fadeIn"
                    easing="ease-in-out"
                    source={HeroImage} // Yerel dosya yolu
                    className="w-full h-full object-cover mt-20 ml-20 "
                />
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("Discover")
                    }
                    className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2  border -t-4 border-[#00bcc9] rounded-full items-center justify-center">

                    <Animatable.View
                        animation={"pulse"} easing={"ease-in-out"} iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]">
                        <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                    </Animatable.View>

                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default HomeScreen;