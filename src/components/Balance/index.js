import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Balance({ saldo, gastos, showValues }) {
    return (
        <View style={styles.container}>
            {showValues ? (
                <>
                    <View>
                        <Text style={styles.itemTitle}>Saldo</Text>
                        <View style={styles.content}>
                            <Text style={styles.currencySymbol}>R$ </Text>
                            <Text style={styles.balance}>{saldo}</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.itemTitle}>Gastos</Text>
                        <View style={styles.content}>
                            <Text style={styles.currencySymbol}>R$ </Text>
                            <Text style={styles.expenses}>{`- ${gastos}`}</Text>
                        </View>
                    </View>
                </>
            ) : (
                <>
                    <View>
                        <Text style={styles.itemTitle}>Saldo</Text>
                        <View style={styles.content}>
                            <Text style={styles.currencySymbol}>R$ </Text>
                            <View style={styles.skeleton}></View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.itemTitle}>Gastos</Text>
                        <View style={styles.content}>
                            <Text style={styles.currencySymbol}>R$ </Text>
                            <View style={styles.skeleton}></View>
                        </View>
                    </View>
                </>
            )}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99
    },
    skeleton: {
        width: 80,
        height: 12,
        backgroundColor: '#dadada',
        borderRadius: 8
    },
    itemTitle: {
        fontSize: 20,
        color: '#bababa'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#bababa',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color: '#e74c3c'
    }

})