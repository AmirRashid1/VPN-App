import { View, Text, SafeAreaView } from 'react-native'
import { ChevronDoubleDownIcon } from 'react-native-heroicons/outline'

const Graph = () => {
    return (
        <SafeAreaView className="items-center justify-center mt-16">
            <View className="items-center ">
                <View className="flex-row items-center space-x-1 my-1">
                    <ChevronDoubleDownIcon size={15} color="#00b300" />
                    <Text className="text-white font-semibold">Download</Text>
                </View>
                <Text className="text-4xl font-bold text-white"> 700 </Text>
                <Text className="text-xl font-semibold text-white -my-2"> mb/s </Text>
            </View>
        </SafeAreaView>
    )
}

export default Graph