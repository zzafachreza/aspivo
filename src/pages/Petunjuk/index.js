import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native'

export default function Petunjuk() {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.white,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>1. </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Pilih Tim</Text>

                    </View>


                </View>
                <View style={{
                    paddingHorizontal: 25,
                }}>

                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 20,
                        color: colors.primary,
                    }}>Baru  : <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 20,
                        color: colors.black,
                    }}>untuk membuat tim baru</Text></Text>


                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 20,
                        color: colors.primary,
                    }}>Cari  : <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 20,
                        color: colors.black,
                    }}>untuk mencari tim yang sudah pernah disimpan sebelumnya</Text></Text>


                </View>

                <View style={{
                    marginTop: 10,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>2. </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Klik detail pada nama tim yang diingkan</Text>

                    </View>


                </View>

                <View style={{
                    marginTop: 10,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>3. </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Untuk menambahkan pemain bisa dengan cara klik tombol “tambah pemain” kemudian dimasukkan nama, nomor pemain dan posisi pemain
                        </Text>

                    </View>


                </View>

                <View style={{
                    marginTop: 10,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>4. </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Jika daftar pemain sudah dimasukkan semua kemudian klik tombol “Pilih Set”</Text>

                    </View>


                </View>

                <View style={{
                    marginTop: 10,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>5. </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Tentukan susunan pemain kemudian klik “Mulai”</Text>

                    </View>


                </View>

                <View style={{
                    marginTop: 10,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>6. </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Penilaian dilakukan untuk setiap pemain yang terdiri dari teknik dasar bola voli yaitu service, receive, set, spike, block dan dig. Setiap teknik dasar memiliki 3 kategori penilaian yaitu  A = Ace, R = Rally, E = Error
                        </Text>

                    </View>


                </View>
                <View style={{
                    marginTop: 10,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>7. </Text>
                    </View>
                    <View style={{
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 20
                        }}>Jika 1 set sudah selesai klik “Lihat Hasil” untuk mengetahui hasil statistik dari tiap pemain
                        </Text>

                    </View>


                </View>



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})