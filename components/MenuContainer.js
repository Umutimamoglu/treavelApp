import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MenuContainer = ({ title, imageSrc, type, setType }) => {
    return (
        <TouchableOpacity
            className="items-center justify-center"
            onPress={() => setType(title.toLowerCase())}
        >
            <View
                className={`w-24 h-24 p-1 rounded-full shadow-md items-center justify-center ${type === title.toLowerCase() ? 'bg-gray-200' : 'bg-white'
                    }`}
            >
                <Image source={imageSrc} className="w-full h-full rounded-full object-cover" />
            </View>
            <Text className={`text-sm font-semibold mt-2 ${type === title.toLowerCase() ? 'text-[#0b646b]' : 'text-gray-700'}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default MenuContainer;