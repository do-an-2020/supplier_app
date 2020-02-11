/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './src/redux/store'
import Navigator from './src/navigation'
import Loading from './src/features/Loading'

const theme = {
  ...DefaultTheme,
  // colors,
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider theme={theme}>
          <View style={{ flex: 1 }}>
            <Navigator />
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
