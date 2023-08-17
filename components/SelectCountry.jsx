import React from 'react';
import { View, Text, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/outline';

const SelectCountry = ({ data }) => {
    // Access the properties of 'data' object here
    const { Flag, GEO, IP, Reason, Tags, Timestamp, db, useragent } = data;
    console.log("......", data, ".....");

    return (
        <SafeAreaView className="bg-gray-500">
            {/* Display the data */}
            <View className="justify-center items-center space-x-3 p-4">
                <Text>Flag: {Flag}</Text>
                <Text>GEO: {GEO}</Text>
                <Text>IP: {IP}</Text>
                <Text>Reason: {Reason}</Text>
                {/* Display Tags as a comma-separated string */}
                <Text>Tags: {Tags.join(', ')}</Text>
                <Text>Timestamp: {Timestamp}</Text>
                {/* Display db properties */}
                <Text>Blacklisted: {db.Blacklisted.join(', ')}</Text>
                <Text>Non-Residential: {db['Non-Residential'].join(', ')}</Text>
                {/* And so on for other properties in 'db' */}
                <Text>User Agent: {useragent}</Text>
                <ChevronRightIcon size={14} color="#fff" />
            </View>
        </SafeAreaView>
    );
};

export default SelectCountry;
