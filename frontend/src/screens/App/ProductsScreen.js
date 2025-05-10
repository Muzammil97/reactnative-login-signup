// src/screens/App/ProductsScreen.js
import React from 'react'; // Import useCallback
import { StyleSheet,View, Text} from 'react-native';
import { useTheme } from 'react-native-paper';

const ProductsScreen = () => {
  const theme = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text>Products</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
   
});

export default ProductsScreen;