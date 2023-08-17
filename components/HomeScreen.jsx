import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import { Bars3BottomLeftIcon, GlobeAltIcon } from 'react-native-heroicons/outline';
import { Graph, Region, Button, Time } from '../components';
import bgImg from '../assets/world.jpeg'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={bgImg} resizeMode='cover' className="h-full filter contrast-50 w-fit" >
            <SafeAreaView >
                <View className="bg-blue-600 flex-row justify-between p-2 shadow-md shadow-blue-600 items-center">
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Menu')}
                    >
                        <Bars3BottomLeftIcon size={33} color="#fff" className="bg-green-500" />
                    </TouchableOpacity>
                    <Text className="text-white font-bold text-lg">SecureSphere VPN</Text>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('Demo')}
                    >
                        <GlobeAltIcon size={33} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Time */}
                <Time />
                {/* Graph show down & upload speed */}
                <Graph />

                {/* Region change */}
                <Region />

                {/* Button start/stop vpn */}
                <Button />
            </SafeAreaView>
        </ImageBackground>
    )
}

export default HomeScreen