import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {  TouchableOpacity } from 'react-native';



export default function App() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemPress = (item) => {
    setSelectedNavItem(item);
    // Действия при нажатии на блок левого навбара
  };

  return (
    <View style={styles.container}>
      {/* Верхний навбар */}
      <View style={styles.topNavbar}>
        {/* Здесь добавьте элементы вашего верхнего навбара */}
        <Text style={styles.topNavbarText}>Верхний навбар</Text>
      </View>

      {/* Левый навбар */}
      <View style={styles.leftNavbar}>
        {/* Генерируем блоки */}
        {[...Array(12).keys()].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.leftNavbarItem,
              selectedNavItem === item && styles.selectedNavItem,
            ]}
            onPress={() => handleNavItemPress(item)}
          >
            <Text style={styles.leftNavbarItemText}>Блок {item + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Основное содержимое */}
      <View style={styles.mainContent}>
        {/* Ваше основное содержимое здесь */}
        <Text>Основное содержимое</Text>
      </View>
    </View>
  );


  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNavbar: {
    height: 60,
    backgroundColor: '#ccc', // Цвет верхнего навбара
    justifyContent: 'center',
    alignItems: 'center',
  },
  topNavbarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  leftNavbar: {
    width: 100,
    backgroundColor: '#f0f0f0', // Цвет левого навбара
    paddingTop: 20,
    alignItems: 'center',
  },
  leftNavbarItem: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  selectedNavItem: {
    backgroundColor: '#ddd',
  },
  leftNavbarItemText: {
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

