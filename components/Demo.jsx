// import { View, Text, FlatList } from 'react-native'
// import React from 'react'
// import useSWR from 'swr';

// const Demo = () => {
//     const fetcher = (...args) => fetch(...args).then(res => res.json());
//     const { data, isLoading, error } = useSWR('https://mindshiftz.api.openvpn.com/docs/v2?group=beta', fetcher);
//     console.log(data.info.contact.email);
//     if (!data) {
//         return <View><Text>Loading</Text></View>
//     }
//     if (error) {
//         return <View><Text>Error while loading content.</Text></View>
//     }
//     return (
//         <View>
//             <FlatList data={data.info.contact.email} renderItem={({ item }) => (
//                 <View className="flex-row w-full">
//                     <Text>{item}</Text>
//                 </View>
//             )} keyExtractor={(item) => item.id} />
//         </View>
//     )
// }

// export default Demo