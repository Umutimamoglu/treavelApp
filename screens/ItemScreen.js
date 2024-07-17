import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const ItemScreen = ({ route }) => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const data = route?.params?.param;

    console.log(data);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <ScrollView className="flex-1 px-4 py-6">
                <View className="relative bg-white shadow-lg rounded-2xl mb-4">
                    <Image
                        source={{
                            uri: data?.photo?.images?.large?.url
                                ? data?.photo?.images?.large?.url
                                : "https://st.depositphotos.com/1654249/1262/i/950/depositphotos_12629953-stock-photo-3d-man-holding-blank-board.jpg"
                        }}
                        className="w-full h-60 object-cover rounded-t-2xl"
                    />
                    <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Discover")}
                            className="w-10 h-10 rounded-md items-center justify-center bg-white">
                            <Entypo name="chevron-left" size={24} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]">
                            <FontAwesome name="heartbeat" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
                        <View className="flex-row space-x-2 items-center">
                            <Text className="text-[12px] font-bold text-gray-100 bg-black bg-opacity-50 px-2 py-1 rounded">
                                {data?.price_level}
                            </Text>
                            <Text className="text-[12px] text-gray-100 bg-black bg-opacity-50 px-2 py-1 rounded">
                                {data?.price}
                            </Text>
                        </View>
                        <View className="px-2 py-1 rounded-md bg-teal-100">
                            <Text className="text-[12px] text-gray-800">{data?.open_now_text}</Text>
                        </View>
                    </View>
                </View>

                <View className="px-4">
                    <View className="flex-row justify-between items-center mb-4">
                        <View className="flex-row space-x-2 items-center">
                            <FontAwesome name="map-marker" size={20} color="#8c9ea6" />
                            <Text className="text-[16px] font-bold text-gray-800">
                                {data?.location_string}
                            </Text>
                        </View>
                    </View>

                    <View className="mb-4">
                        <Text className="text-[#42b288] text-[24px] font-bold">
                            {data?.name}
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-2 mb-4">
                        {data?.rating && (
                            <View className="flex-row items-center space-x-2">
                                <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                    <FontAwesome name="star" size={20} color="#d58574" />
                                </View>
                                <View>
                                    <Text className="text-[#515151] text-[12px]">{data?.rating}</Text>
                                    <Text className="text-[#515151] text-[12px]">Ratings</Text>
                                </View>
                            </View>
                        )}
                        {data?.price_level && (
                            <View className="flex-row items-center space-x-2">
                                <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                    <MaterialIcons name="attach-money" size={20} color="black" />
                                </View>
                                <View>
                                    <Text className="text-[#515151] text-[12px]">{data?.price_level}</Text>
                                    <Text className="text-[#515151] text-[12px]">Price Level</Text>
                                </View>
                            </View>
                        )}
                        {data?.bearing && (
                            <View className="flex-row items-center space-x-2">
                                <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                                    <FontAwesome name="map-signs" size={20} color="black" />
                                </View>
                                <View>
                                    <Text className="text-[#515151] text-[12px]">{data?.bearing}</Text>
                                    <Text className="text-[#515151] text-[12px]">Bearing</Text>
                                </View>
                            </View>
                        )}
                    </View>

                    {data?.description && (
                        <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97a6af] mb-4">
                            {data?.description}
                        </Text>
                    )}

                    {data?.cuisine && (
                        <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4 mb-4">
                            {data?.cuisine.map((n) => (
                                <TouchableOpacity key={n.key} className="px-2 py-1 rounded-md bg-emerald-100">
                                    <Text>{n.name}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    <View className="space-y-2 mt-2 bg-gray-100 rounded-2xl px-4 py-2">
                        {data?.phone && (
                            <View className="items-center flex-row space-x-6">
                                <FontAwesome name="phone" size={20} color="#42b288" />
                                <Text className="text-lg">{data?.phone}</Text>
                            </View>
                        )}
                        {data?.email && (
                            <View className="items-center flex-row space-x-6">
                                <FontAwesome name="envelope" size={20} color="#42b288" />
                                <Text className="text-lg">{data?.email}</Text>
                            </View>
                        )}
                        {data?.address && (
                            <View className="items-center flex-row space-x-6">
                                <Ionicons name="pin-outline" size={20} color="#42b288" />
                                <Text className="text-lg">{data?.address}</Text>
                            </View>
                        )}
                        <TouchableOpacity className="mt-4 px-4 py-4 rounded-lg bg-[#06b2be] items-center justify-center mb-12">
                            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                                Book Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ItemScreen;