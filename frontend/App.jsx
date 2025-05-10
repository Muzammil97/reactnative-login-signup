// // App.jsx (in project root)
// import React from 'react';
// import { AuthProvider } from './src/context/AuthContext'; // Use .js extension
// import AppNavigator from './src/navigation/AppNavigator'; // Use .jsx extension
// import { LogBox } from 'react-native';


// // Optional: Ignore specific warnings
// LogBox.ignoreLogs([
  //   'Non-serializable values were found in the navigation state',
  // ]);
  
  // const App = () => { // No need for React.FC in JS
  //   return (
    //     <AuthProvider>
    //       <AppNavigator />
    //     </AuthProvider>
    //   );
    // };
    
    // export default App;
    
//     import { Button, Text, View } from "react-native";
// import { styles } from './style.js'; // Use .js extension

// export default function App() {
//   return (
//   <View style={styles.box}>
//     <Text style={styles.text}>Hello, World!</Text>
//     <Button title="no hello" color={"red"} />
//   </View>
//   )
// }


// // App.jsx
// import React, { useState } from 'react'; // Import React and useState hook
// import {
//   // Core Components for Structure & Display
//   SafeAreaView, // Ensures content is within safe screen boundaries (avoids notches, etc.)
//   View,         // The most fundamental component for building UI, like a <div>
//   Text,         // Displays text content
//   StyleSheet,   // Provides an optimized way to define styles
//   StatusBar,    // Controls the appearance of the device's status bar (time, battery)

//   // Core Components for User Interaction
//   Button,       // A basic, platform-styled button
//   TouchableOpacity, // A wrapper for making views respond properly to touches (with opacity feedback)
//   TextInput,    // Allows users to input text

//   // Core Component for Displaying Images
//   Image,        // Displays images (local or remote)

//   // Utility
//   Alert,        // Displays a standard alert dialog
//   Platform,     // Provides platform-specific information (e.g., 'ios', 'android')
// } from 'react-native';

// // A simple functional component for our app
// const App = () => {
//   // State variable to hold the text input value
//   const [inputValue, setInputValue] = useState('');
//   // State variable to show/hide a message
//   const [showMessage, setShowMessage] = useState(false);

//   // Function to handle button press
//   const handleButtonPress = () => {
//     Alert.alert(
//       'Button Pressed!', // Alert Titleds
//       `You entered: ${inputValue || 'nothing yet'}\nPlatform: ${Platform.OS}`, // Alert Message
//       [{ text: 'OK' }] // Array of buttons in the alert
//     );
//     setShowMessage(true); // Show the message text
//     console.log('sss');
    
//   };

//   // Function to handle touchable opacity press
//   const handleTouchablePress = () => {
//     setInputValue(''); // Clear the input field
//     setShowMessage(false); // Hide the message text
//   };

//   return (
//     // SafeAreaView: Ensures content isn't hidden by notches or device chrome. Crucial top-level wrapper.
//     <SafeAreaView style={styles.safeArea}>
//       {/* StatusBar: Controls the look of the device's status bar. */}
//       <StatusBar barStyle="dark-content" backgroundColor={styles.safeArea.backgroundColor} />

//       {/* View: The main container for our app content. Uses Flexbox for layout. */}
//       <View style={styles.container}>

//         {/* Text: Displays the title of the app. */}
//         <Text style={styles.title}>Simple React Native App</Text>

//         {/* Image: Displays a placeholder image. Requires width/height. */}
//         <Image
//           style={styles.logo}
//           source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} // Can also use require('./path/to/local/image.png')
         
//           resizeMode="contain" // How the image should be resized ('cover', 'contain', 'stretch', 'repeat', 'center')
//         />

//         {/* TextInput: A field for user input. */}
//         <TextInput
//           style={styles.input}
//           placeholder="Enter some text here..." // Placeholder text
//           placeholderTextColor="#999"
//           value={inputValue} // Controlled component: value linked to state
//           onChangeText={setInputValue} // Function called when text changes
//           keyboardType="default" // Type of keyboard to show (e.g., 'numeric', 'email-address')
//         />

//         {/* Button: A standard platform button. Styling is limited. */}
//         <View style={styles.buttonWrapper}>
//           <Button
//             title="Show Alert & Message"
//             onPress={handleButtonPress}
//             color={Platform.OS === 'ios' ? '#007AFF' : '#6200EE'} // Platform-specific color
//             disabled={!inputValue} // Disable if input is empty
//           />
//         </View>

//         {/* TouchableOpacity: A customizable touchable area. Good for custom buttons. */}
//         <TouchableOpacity
//           style={styles.touchable}
//           onPress={handleTouchablePress}
//           activeOpacity={0.7} // How much the opacity changes on press (0 to 1)
//         >
//           {/* Text: Label inside the touchable area. */}
//           <Text style={styles.touchableText}>Clear Input & Hide Message</Text>
//         </TouchableOpacity>

//         {/* Conditional Rendering: Only show this Text if showMessage is true */}
//         {showMessage && (
//           <Text style={styles.messageText}>
//             You pressed the button! (Platform: {Platform.OS})
//           </Text>
//         )}

//       </View>
//     </SafeAreaView>
//   );
// };

// // StyleSheet: Creates an optimized style object. Good practice for performance and organization.
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1, // Take up all available screen space
//     backgroundColor: '#f5f5f5', // Background color for the area outside the main container
//   },
//   container: {
//     flex: 1, // Take up all available space within the SafeAreaView
//     alignItems: 'center', // Center children horizontally
//     // justifyContent: 'center', // Center children vertically (remove if you want content at the top)
//     paddingTop: 40, // Add some padding at the top if not using justifyContent: 'center'
//     paddingHorizontal: 20, // Horizontal padding for the content
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20, // Space below the title
//     color: '#333',
//   },
//   logo: {
//     width: 180,
//     height: 180,
//     marginBottom: 30,
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 20,
//     paddingHorizontal: 15,
//     width: '100%', // Take full width of container (minus padding)
//     backgroundColor: '#fff',
//     fontSize: 16,
//   },
//   buttonWrapper: {
//     width: '100%', // Make wrapper full width
//     marginBottom: 15, // Space below the button
//   },
//   touchable: {
//     backgroundColor: '#e74c3c', // Custom background color
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//     marginBottom: 20,
//     width: '100%', // Make touchable full width
//     alignItems: 'center', // Center text inside
//     elevation: 3, // Android shadow
//     shadowColor: '#000', // iOS shadow properties
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   touchableText: {
//     color: '#fff', // Text color for the touchable
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   messageText: {
//     marginTop: 20,
//     fontSize: 16,
//     color: 'green',
//     fontStyle: 'italic',
//     textAlign: 'center',
//   },
// });

// // Export the component so it can be used by React Native
// export default App;
// App.js (or your main entry point)
// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
// } from 'react-native';
// import {
//   Provider as PaperProvider,
//   Card,
//   Title,
//   Paragraph,
//   Button,
//   ActivityIndicator,
//   MD2Colors,
// } from 'react-native-paper';
// import axios from 'axios';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// // --- Card Component ---
// const MyCard = ({ item }) => {
//   return (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Title>{item.title}</Title>
//         <Paragraph>{item.body}</Paragraph>
//       </Card.Content>
//       <Card.Actions>
//         <Button onPress={() => console.log('View Details for:', item.id)}>
//           View Details
//         </Button>
//       </Card.Actions>
//     </Card>
//   );
// };

// // --- Page Component (Handles fetching and displaying cards) ---
// const Page = ({ route, navigation }) => {
//   const { pageNumber } = route.params;
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const cardsPerPage = 3;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://jsonplaceholder.typicode.com/posts'
//         );
//         const startIndex = (pageNumber - 1) * cardsPerPage;
//         const endIndex = startIndex + cardsPerPage;
//         const pageData = response.data.slice(startIndex, endIndex);
//         setData(pageData);
//         setLoading(false);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//         setLoading(false);
//         // Handle the error (e.g., show an error message)
//       }
//     };

//     fetchData();
//   }, [pageNumber]); // Re-fetch when pageNumber changes

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.loadingContainer}>
//         <ActivityIndicator size="large" animating={true} color={MD2Colors.red800} />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => <MyCard item={item} />}
//         keyExtractor={(item) => item.id.toString()}
//       />

//       <SafeAreaView style={styles.buttonContainer}>
//           <Button
//             mode="contained"
//             onPress={() => navigation.navigate('Page', { pageNumber: pageNumber - 1 })}
//             disabled={pageNumber === 1} // Disable if on the first page
//           >
//             Previous Page
//           </Button>
//           <Button
//             mode="contained"
//             onPress={() => navigation.navigate('Page', { pageNumber: pageNumber + 1 })}
//           >
//             Next Page
//           </Button>
//         </SafeAreaView>

//     </SafeAreaView>
//   );
// };


// const App = () => {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Page">
//           <Stack.Screen name="Page" component={Page} initialParams={{ pageNumber: 1 }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//   },
//   card: {
//     marginVertical: 8,
//     elevation: 3, // Add shadow
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   }
// });

// export default App;

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   Text,
//   View,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import axios from 'axios';

// const cardsPerPage = 3;

// const MyCard = ({ item }) => {
//   return (
//     <View style={styles.card}>
//       <View style={styles.cardContent}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.paragraph}>{item.body}</Text>
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => console.log('View Details for:', item.id)}
//       >
//         <Text style={styles.buttonText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://jsonplaceholder.typicode.com/posts'
//         );
//         const startIndex = (currentPage - 1) * cardsPerPage;
//         const endIndex = startIndex + cardsPerPage;
//         const pageData = response.data.slice(startIndex, endIndex);
//         setData(pageData);
//         setLoading(false);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//         setLoading(false);
//         // Handle the error (e.g., show an error message)
//       }
//     };

//     fetchData();
//   }, [currentPage]);

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007AFF" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => <MyCard item={item} />}
//         keyExtractor={(item) => item.id.toString()}
//       />

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[styles.navButton, currentPage === 1 && styles.disabledButton]}
//           onPress={handlePreviousPage}
//           disabled={currentPage === 1}
//         >
//           <Text style={styles.navButtonText}>Previous</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.navButton} onPress={handleNextPage}>
//           <Text style={styles.navButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//   },
//   card: {
//     backgroundColor: 'white',
//     marginVertical: 8,
//     borderRadius: 8,
//     elevation: 3, // Add shadow
//     overflow: 'hidden', // Clip content to rounded corners
//   },
//   cardContent: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   paragraph: {
//     fontSize: 14,
//     color: '#555',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
//   navButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   navButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   disabledButton: {
//     backgroundColor: '#999',
//   },
// });

// export default App;

// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   View,
// } from 'react-native';
// import {
//   Card,
//   Title,
//   Paragraph,
//   Button,
//   ActivityIndicator,
//   MD2Colors,
//   Provider as PaperProvider,
// } from 'react-native-paper';

// // Your API data (JSON)
// const apiData = [
//   {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
//   {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},
//   {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},
//   {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},
//   {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}},
//   {"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3.9,"count":70}},
//   {"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},
//   {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}},
//   {"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":{"rate":3.3,"count":203}},
//   {"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":{"rate":2.9,"count":470}},
//   {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}},
//   {"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":{"rate":4.8,"count":400}},
//   {"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","category":"electronics","image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg","rating":{"rate":2.9,"count":250}},
//   {"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","category":"electronics","image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg","rating":{"rate":2.2,"count":140}},
//   {"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","category":"women's clothing","image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg","rating":{"rate":2.6,"count":235}},
//   {"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women's clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg","rating":{"rate":2.9,"count":340}},
//   {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}},
//   {"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}},
//   {"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women's clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg","rating":{"rate":4.5,"count":146}},
//   {"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women's clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg","rating":{"rate":3.6,"count":145}}
// ];

// const cardsPerPage = 3;

// const MyCard = ({ item }) => {
//   return (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Title>{item.title}</Title>
//         <Paragraph>{item.description}</Paragraph>  // Show description instead of body
//         <Paragraph>Price: ${item.price}</Paragraph>      // Show price
//         <Paragraph>Rating: {item.rating.rate} ({item.rating.count} reviews)</Paragraph> // Show rating
//       </Card.Content>
//       <Card.Actions>
//         <Button onPress={() => console.log('View Details for:', item.id)}>
//           View Details
//         </Button>
//       </Card.Actions>
//     </Card>
//   );
// };

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false); // No longer need loading state for static data
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     // No longer need to fetch data, just slice the apiData
//     const startIndex = (currentPage - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;
//     const pageData = apiData.slice(startIndex, endIndex);
//     setData(pageData);

//   }, [currentPage]);

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // No longer need a loading check

//   return (
//     <PaperProvider>
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={data}
//           renderItem={({ item }) => <MyCard item={item} />}
//           keyExtractor={(item) => item.id.toString()}
//         />

//         <View style={styles.buttonContainer}>
//           <Button
//             mode="contained"
//             onPress={handlePreviousPage}
//             disabled={currentPage === 1}
//           >
//             Previous Page
//           </Button>
//           <Button mode="contained" onPress={handleNextPage}>
//             Next Page
//           </Button>
//         </View>
//       </SafeAreaView>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//   },
//   card: {
//     marginVertical: 8,
//     elevation: 3, // Add shadow
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
// });

// export default App;


// import { createStaticNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import  { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   View,
//   Text, // Import Text
// } from 'react-native';
// import {
//   Card,
//   Title,
//   Paragraph,
//   Button,
//   ActivityIndicator,
//   MD2Colors,
//   Provider as PaperProvider,
// } from 'react-native-paper';
// import NavigateReact from './config/navigation';

// // Your API data (JSON)
// const apiData = [
//   {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
//   {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},
//   {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},
//   {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},
//   {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}},
//   {"id":6,"title":"Solid Gold Petite Micropave ","price":168,"description":"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3.9,"count":70}},
//   {"id":7,"title":"White Gold Plated Princess","price":9.99,"description":"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},
//   {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}},
//   {"id":9,"title":"WD 2TB Elements Portable External Hard Drive - USB 3.0 ","price":64,"description":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":{"rate":3.3,"count":203}},
//   {"id":10,"title":"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s","price":109,"description":"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","category":"electronics","image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg","rating":{"rate":2.9,"count":470}},
//   {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg","rating":{"rate":4.8,"count":319}},
//   {"id":12,"title":"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive","price":114,"description":"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty","category":"electronics","image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg","rating":{"rate":4.8,"count":400}},
//   {"id":13,"title":"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin","price":599,"description":"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","category":"electronics","image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg","rating":{"rate":2.9,"count":250}},
//   {"id":14,"title":"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ","price":999.99,"description":"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","category":"electronics","image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg","rating":{"rate":2.2,"count":140}},
//   {"id":15,"title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats","price":56.99,"description":"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates","category":"women's clothing","image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg","rating":{"rate":2.6,"count":235}},
//   {"id":16,"title":"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket","price":29.95,"description":"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON","category":"women's clothing","image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg","rating":{"rate":2.9,"count":340}},
//   {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}},
//   {"id":18,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ","price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}},
//   {"id":19,"title":"Opna Women's Short Sleeve Moisture","price":7.95,"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort","category":"women's clothing","image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg","rating":{"rate":4.5,"count":146}},
//   {"id":20,"title":"DANVOUY Womens T Shirt Casual Cotton Short","price":12.99,"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","category":"women's clothing","image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg","rating":{"rate":3.6,"count":145}}
// ];

// const cardsPerPage = 3;

// const MyCard = ({ item }) => {
//   return (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Title><Text>{item.title}</Text></Title>
//         <Paragraph><Text>{item.description}</Text></Paragraph>  // Show description instead of body
//         <Paragraph><Text>Price: ${item.price}</Text></Paragraph>      // Show price
//         <Paragraph><Text>Rating: {item.rating.rate} ({item.rating.count} reviews)</Text></Paragraph> // Show rating
//       </Card.Content>
//       <Card.Actions>
//         <Button onPress={() => console.log('View Details for:', item.id)}>
//          <Text> View Details</Text>
//         </Button>
//       </Card.Actions>
//     </Card>
//   );
// };

// const Detail = () => {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const startIndex = (currentPage - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;
//     const pageData = apiData.slice(startIndex, endIndex);
//     setData(pageData);

//   }, [currentPage]);

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <PaperProvider>
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={data}
//           renderItem={({ item }) => <MyCard item={item} />}
//           keyExtractor={(item) => item.id.toString()}
//           ListEmptyComponent={() => (  // Handle case when no data is available
//             <View style={styles.emptyList}>
//               <Text>No data available for this page.</Text>
//             </View>
//           )}
//         />

//         <View style={styles.buttonContainer}>
//           <Button
//             mode="contained"
//             onPress={handlePreviousPage}
//             disabled={currentPage === 1}
//           >
//             <Text> Previous Page</Text>
//           </Button>
//           <Button
//             mode="contained"
//             onPress={handleNextPage}
//             disabled={currentPage * cardsPerPage >= apiData.length} // Disable "Next" if on last page
//           >
//            <Text> Next Page</Text>
//           </Button>
//         </View>
//       </SafeAreaView>
//     </PaperProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//   },
//   card: {
//     marginVertical: 8,
//     elevation: 3, // Add shadow
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
//   emptyList: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
// });

// export {Detail};



// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Text>Detail Screen</Text>
      
//     </View>
//   );
// }

// const RootStack = createNativeStackNavigator({
//   screens: {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: Detail,
//   },
// });

// const Navigation = createStaticNavigation(RootStack);
// import * as React from 'react';
// import NavigateReact from './config/navigation';



// export default function App() {
//   return <NavigateReact />;
// }


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// // import { PaperProvider } from 'react-native-paper';
// // import MainNavigator from './navigation/MainNavigator';
// import AuthNavigator from './old-data/navigation/AuthNavigator';

// export default function App() {
//   return (
   
//       <NavigationContainer>
//         <AuthNavigator />
//       </NavigationContainer>
    
//   );
// }


// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// export default function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');
//   const [editId, setEditId] = useState(null);

//   const handleAddOrEditTodo = () => {
//     if (input.trim() === '') return;

//     if (editId !== null) {
//       setTodos(prev =>
//         prev.map(todo => (todo.id === editId ? { ...todo, text: input } : todo))
//       );
//       setEditId(null);
//     } else {
//       setTodos(prev => [
//         ...prev,
//         { id: Date.now().toString(), text: input },
//       ]);
//     }

//     setInput('');
//   };

//   const handleEdit = (id, text) => {
//     setInput(text);
//     setEditId(id);
//   };

//   const handleDelete = id => {
//     setTodos(prev => prev.filter(todo => todo.id !== id));
//   };

//   const renderTodoItem = ({ item }) => (
//     <View style={styles.todoItem}>
//       <Text style={styles.todoText}>{item.text}</Text>
//       <View style={styles.actions}>
//         <TouchableOpacity onPress={() => handleEdit(item.id, item.text)}>
//           <Text style={styles.edit}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleDelete(item.id)}>
//           <Text style={styles.delete}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>Simple Todo App</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Enter todo..."
//           style={styles.input}
//           value={input}
//           onChangeText={setInput}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={handleAddOrEditTodo}>
//           <Text style={styles.buttonText}>{editId !== null ? 'Update' : 'Add'}</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={todos}
//         keyExtractor={item => item.id}
//         renderItem={renderTodoItem}
//         ListEmptyComponent={<Text style={styles.emptyText}>No todos yet.</Text>}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   inputContainer: { flexDirection: 'row', marginBottom: 20 },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#aaa',
//     padding: 10,
//     borderRadius: 5,
//   },
//   addButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     marginLeft: 10,
//     borderRadius: 5,
//   },
//   buttonText: { color: 'white' },
//   emptyText: { textAlign: 'center', marginTop: 50, color: '#777' },
//   todoItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#eee',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   todoText: { flex: 1 },
//   actions: { flexDirection: 'row' },
//   edit: { color: 'green', marginLeft: 10 },
//   delete: { color: 'red', marginLeft: 10 },
// });



// import 'react-native-gesture-handler'; // Required for React Navigation (add at top)
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { AuthProvider } from './src/context/AuthContext'; // Import AuthProvider
// import AppNavigator from './src/navigation/AppNavigator'; // Import your navigator

// const App = () => {
//   return (
//     // Wrap the entire app with AuthProvider
//     <AuthProvider>
//       {/* NavigationContainer manages the navigation tree */}
//       <NavigationContainer>
//         {/* AppNavigator conditionally renders auth or app stack */}
//         <AppNavigator />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// };

// export default App;


// src/App.js
import 'react-native-gesture-handler'; // Keep at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper'; // Import PaperProvider
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
// Import Provider from react-redux
import { Provider } from 'react-redux';
// Import your Redux store
import store from './src/store/store';

const App = () => {
  return (
    // Wrap with PaperProvider first
    <Provider store={store}>
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
    </Provider >
  );
};

export default App;
