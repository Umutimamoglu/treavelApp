import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Attractions, AvatarImage, Hotels, Resturants, SadIcon } from '../assets/index';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import { AntDesign } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api';

const Discover = () => {
    const navigation = useNavigation();
    const [type, setType] = useState("restaurants");
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    useEffect(() => {
        setIsLoading(true);
        getPlacesData().then((data) => {
            setMainData(data);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }).catch(error => {
            console.error("Veri çekme hatası:", error);
            setIsLoading(false);
        });
    }, []);

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
                    <Text className="text-[#527283] text-[36px]">the beauty today</Text>
                </View>
                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
                    <Image source={AvatarImage} className="w-full h-full rounded-md object-cover" />
                </View>
            </View>
            <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log(details?.geometry?.viewport);
                    }}
                    query={{
                        key: 'AIzaSyCQAzUuXmamdJpaR8ypgeB2ezjX7GJxCR4',
                        language: 'en',
                    }}
                />
            </View>
            {isLoading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#0b646b" />
                </View>
            ) : (
                <ScrollView>
                    <View className="flex-row items-center justify-between px-8 mt-8">
                        <MenuContainer
                            key={"hotel"}
                            title="Hotels"
                            imageSrc={Hotels}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key={"attractions"}
                            title="Attractions"
                            imageSrc={Attractions}
                            type={type}
                            setType={setType}
                        />
                        <MenuContainer
                            key={"resturants"}
                            title="Resturants"
                            imageSrc={Resturants}
                            type={type}
                            setType={setType}
                        />
                    </View>
                    <View>
                        <View className="flex-row items-center justify-between px-4 mt-8">
                            <Text className="text-[#2c7379] text-[28px] font-bold">Top Tips</Text>
                            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                                <Text className="text-[#a0c4c7] text-[20px] font-bold">Keşfet</Text>
                                <AntDesign name="arrowright" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        <View className="px-4 mt-8 flex flex-col space-y-4 flex-wrap" >
                            {mainData?.length > 0 ? (
                                mainData?.map((data, i) => (
                                    <ItemCardContainer
                                        key={i}
                                        imageSrc={data?.photo?.images?.medium?.url ? data?.photo?.images?.medium?.url : "https://st.depositphotos.com/1654249/1262/i/950/depositphotos_12629953-stock-photo-3d-man-holding-blank-board.jpg"}
                                        title={data?.name}
                                        location={data?.location_string}
                                        data={data}
                                    />
                                ))
                            ) : (
                                <View className="w-full h-[400px] items-center space-y-8 justify-center">
                                    <Image source={SadIcon} className="w-32 h-32 object-cover" />
                                    <Text className="text-2xl text-[#428288] font-semibold">
                                        Malesef... Veri bulunamadı.
                                    </Text>
                                </View>
                            )}
                        </View>
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}

export default Discover;