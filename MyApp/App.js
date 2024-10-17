import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
const handleSearch = () => {
  // search logic here

};

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Original Header with Text Links */}
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.food}>Food</Text>
          <Text style={styles.zone}>Zone</Text>
        </Text>
        {/* Search Button */}

        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.link}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchText}>Search your craving here...</Text>
      </TouchableOpacity>
      <Text style={styles.foodAbove}></Text>
      {/* Image Slider Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.slider}
      >
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?t=st=1729082334~exp=1729085934~hmac=ad56aa96f713db051d9b7052c6b586322ebc1dc901695e1acaabe1f587f80bab&w=740",
            }} // Replace with your image URL
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
            }} // Replace with your image URL
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
            }} // Replace with your image URL
            style={styles.image}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    marginTop: 39,
  },
  body: {
    margin: 0,
    padding: 0,
  },
  searchButton: {
    backgroundColor: "black",
    width: "auto",
    color: "blue",
    border: "none",
    padding: 10,
  },
 
  searchText: {
    color: "white",
    textAlign:'center',
    borderBlockColor:'yellow',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16, // Adds spacing between header and slider
    backgroundColor: "black",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  foodAbove: {
    textAlign: "center",
    color: "white",
  },
  linksContainer: {
    flexDirection: "row",
  },
  food: {
    color: "orange",
  },
  zone: {
    color: "white",
  },
  link: {
    color: "white",
    fontSize: 18,
    marginLeft: 16,
  },
  slider: {
    height: "auto",
  },
  image: {
    width: 350,
    height: 300,
    marginRight: 16,
    borderRadius: 10,
    objectFit: "cover",
  },
});

export default Header;
