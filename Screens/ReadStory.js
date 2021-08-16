import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <SafeAreaProvider>
                <View style={styles.container}>
                    <Text>Read Story</Text>
                </View>
            </SafeAreaProvider>    
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});