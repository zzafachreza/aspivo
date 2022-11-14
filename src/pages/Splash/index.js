import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {
    animasi();
  }, []);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Image
          source={require('../../assets/logo.png')}
          style={
            {
              width: windowWidth - 100,
              height: 300,
              resizeMode: 'contain'
            }
          }
        />
        <Text style={{
          fontSize: windowWidth / 10,
          color: colors.white,
          fontFamily: fonts.secondary[600]
        }}>ASPIVO</Text>
        <Text style={{
          fontSize: windowWidth / 30,
          color: colors.white,
          fontFamily: fonts.secondary[400]
        }}>Aplikasi Statistik Pertandingan Voli</Text>

      </View>

      <View style={{
        padding: 10,
        flex: 0.3
      }}>
        <MyButton onPress={() => navigation.navigate('GetStarted')} warna={colors.secondary} title="Mulai" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
