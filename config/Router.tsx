import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Router = () => {
  return (
    <View>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  )
}

export default Router