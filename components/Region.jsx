import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GlobeAsiaAustraliaIcon, ChevronRightIcon } from 'react-native-heroicons/solid'
import Country from './Country'
import { useNavigation } from '@react-navigation/native'
const Region = () => {
    const [change, setchange] = useState(false);
    const navigation = useNavigation();

    return (
        <View className="items-center justify-center">

            <TouchableOpacity onPress={() => navigation.navigate('Country')}
                className="bg-blue-500 items-center justify-center px-4 py-3 w-32 mx-auto my-5 rounded-xl  flex-row space-x-2" activeOpacity={0.6}>
                <GlobeAsiaAustraliaIcon size={21} color="#fff" />
                <Text className="text-white font-bold">USA</Text>
                <ChevronRightIcon size={17} color="#fff" />
            </TouchableOpacity>



        </View>
    )
}

export default Region