import { Alert, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import ViewShot from "react-native-view-shot";
import Share from 'react-native-share';

export default function TimList({ navigation }) {
    const [data, setData] = useState([]);

    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            __getTransaction();

        }

    }, [isFocused]);


    const __getTransaction = () => {
        axios.post(apiURL + 'tim_data.php').then(rz => {
            setData(rz.data);
            console.log(rz.data)
        })
    }



    const __getTransactionKey = (x) => {
        axios.post(apiURL + 'tim_data.php', {
            key: x
        }).then(rz => {
            setData(rz.data);
            console.log(rz.data)
        })
    }



    const __renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('TimDetail', item)} style={{
                padding: 10,
                marginVertical: 5,
                flex: 1,
                backgroundColor: colors.secondary,
                flexDirection: 'row'
            }}>
                <Text style={{
                    flex: 1,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 25,
                    color: colors.primary,
                }}>{item.nama_tim}</Text>
                <Icon type='ionicon' size={windowWidth / 15} name='chevron-forward-circle-outline' color={colors.primary} />
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.primary,
            padding: 10,
        }}>
            <MyInput onChangeText={(x) => __getTransactionKey(x)} label="Masukan kata kunci" placeholder="Cari nama tim" />
            <MyGap jarak={20} />
            <FlatList data={data} renderItem={__renderItem} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})