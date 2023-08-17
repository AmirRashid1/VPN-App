import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { PowerIcon, ChevronUpIcon, ChevronDownIcon } from 'react-native-heroicons/solid';

const Button = () => {
    const [connect, setConnect] = useState(false)
    const toggleConnect = () => {
        setConnect(!connect);
    };
    return (
        <View>
            <View className="flex items-center justify-center" >
                <TouchableOpacity className="flex items-center justify-center rounded-lg transition-all duration-75 ease-in-out  bg-gray-500 opacity-90 shadow-2xl w-20 h-36 space-y-3" activeOpacity={0.7} onPress={toggleConnect}>
                    {connect ? (
                        <>
                            <View className="bg-gray-600 rounded-full p-2">
                                <PowerIcon size={30} color='#00802b' className="left-7" strokeOpacity={30} strokeWidth={5} />
                            </View>
                            <ChevronDownIcon size={21} color='#bfbfbf' className="opacity-70" />
                            <ChevronDownIcon size={21} color='white' />
                        </>

                    )
                        : (
                            <>
                                <ChevronUpIcon size={21} color='#bfbfbf' className="opacity-70" />
                                <ChevronUpIcon size={21} color='white' />
                                <View className="bg-gray-600 rounded-full p-2">
                                    <PowerIcon size={30} color='red' className="left-7" strokeOpacity={30} strokeWidth={5} />
                                </View>
                            </>
                        )}
                </TouchableOpacity>

            </View>
            {connect ? (<Text className="text-white font-bold text-xl text-center">STOP</Text>) : (<Text className="text-white font-bold text-xl text-center">START</Text>)}
        </View>
    );
};

export default Button;
