import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Movements({ data, showValues }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {showValues ? (
                    <Text style={data.type === 1 ? styles.value : styles.expenses}>R$ {data.type === 0 ? `- ${data.value}` : data.value}</Text>
                ) : (
                    <View style={styles.skeleton}>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#bababa',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    skeleton: {
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#e74e3c',
        fontWeight: 'bold'
    }
})