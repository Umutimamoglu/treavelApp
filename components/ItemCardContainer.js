import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const ItemCardContainer = ({ imageSrc, title, location, data }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() =>
            navigation.navigate("ItemScreen", { param: data })
        } className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-full my-2">
            <Image
                source={{ uri: imageSrc }}
                className="w-full h-40 rounded-md object-cover"
            />
            {title ? (
                <>
                    <Text className="text-[#428288] text-[18px] font-bold">
                        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
                    </Text>

                    <View className="flex-row items-center space-x-1">
                        <Entypo name="location-pin" size={20} color="#8597a2" />
                        <Text className="text-[#428288] text-[14px] font-bold">
                            {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
                        </Text>
                    </View>
                </>
            ) : (
                <></>
            )

            }
        </TouchableOpacity>
    );
}

export default ItemCardContainer;