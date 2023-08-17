// Country.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import SelectCountry from './SelectCountry';

const Country = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // Fetch data from the API
            const options = {
                method: 'GET',
                url: 'https://fraudsentinel.p.rapidapi.com/sentinel.json',
                params: { ip: '127.0.0.1' },
                headers: {
                    'X-RapidAPI-Key': 'b144339594msh8119d314fd730e4p16ecb8jsn8275edf13c7f',
                    'X-RapidAPI-Host': 'fraudsentinel.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                setData([response.data]); // Store the response data in an array
                setIsLoading(false); // Set isLoading to false
            } catch (error) {
                console.error(error);
                setIsLoading(false); // Set isLoading to false even in case of error
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <ActivityIndicator color="#0099ff" size={65} />;
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <SelectCountry data={item} title="Select Region" />}
                keyExtractor={(item) => item.IP} // Assuming IP is unique
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Country;
