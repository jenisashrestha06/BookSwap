import { Bell, Book, Calendar, House, Search, User } from "lucide-react-native";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Swap");

  const recommendedBooks = [
    {
      id: 1,
      name: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      type: "Buy",
      image:
        "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408844441.jpg",
    },
    {
      id: 2,
      name: "On Earth we are Briefly Gorgeous",
      author: "Ocean Vuong",
      type: "Buy",
      image: "https://cdn2.penguin.com.au/covers/original/9781529110685.jpg",
    },
    {
      id: 3,
      name: "The Book Thief",
      author: "Markus Zusak",
      type: "Swap",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwgmYSvaUL-doaPx3ntvDuqo78RiNreOZA&s",
    },
    {
      id: 4,
      name: "Heaven",
      author: "Meiko Kawakami",
      type: "Swap",
      image:
        "https://readingmattersblog.com/wp-content/uploads/2021/07/heaven.jpeg",
    },
    {
      id: 5,
      name: "Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      type: "Buy",
      image: "https://m.media-amazon.com/images/I/71pIEVU3EeL.jpg",
    },
    {
      id: 6,
      name: "Before the Coffee Gets Cold",
      author: "Toshikazu Kawaguchi",
      type: "Swap",
      image:
        "https://ik.imagekit.io/panmac/tr:di-placeholder_portrait_aMjPtD9YZ.jpg,tr:w-350,f-jpg,pr-true/edition/9781529029581.jpg",
    },
    {
      id: 7,
      name: "The Song of Achilles",
      author: "Madeline Miller",
      type: "Swap",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/TheSongofAchilles.png/250px-TheSongofAchilles.png",
    },
    {
      id: 8,
      name: "Norwegian Wood",
      author: "Haruki Murakami",
      type: "Buy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEt7Gh81bVpvcm9A8rf746CZdpvvyjbdOKIw&s",
    },
  ];

  const browsebooks = [
    {
      id: 101,
      name: "The Kite Runner",
      author: "Khaled Hosseini",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQxhq_xKZsiRDwF-fZWubXxvlx0L93P5T1A&s",
    },
    {
      id: 102,
      name: "Call Me By Your Name",
      author: "André Aciman",
      image:
        "https://images2.medimops.eu/product/67b178/M01250169445-source.jpg",
    },
    {
      id: 103,
      name: "Normal People",
      author: "Sally Rooney",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRulpGBbgj5Iuch8NcxbfKKKiYpFJMQ0TtAVA&s",
    },
    {
      id: 104,
      name: "I Who Have Never Known Men",
      author: "Jacqueline Harpman",
      image:
        "https://images.squarespace-cdn.com/content/v1/55e1f8f0e4b02b09d51bf3bf/1641588706254-VEIVWQNYAOYL96LYV97T/9781945492600_FC.jpg?format=1000w",
    },
    {
      id: 105,
      name: "The Secret History",
      author: "Donna Tartt",
      image: "https://cdn2.penguin.com.au/covers/original/9780140167771.jpg",
    },
    {
      id: 106,
      name: "Intermezzo",
      author: "Sally Rooney",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPH_OXdH3dTVV6dhu4gwZefpNDoxbn2gw6A&s",
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>BOOKSWAP</Text>

          <View style={styles.headerRight}>
            <View style={styles.searchBox}>
              <Search />

              <TextInput
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                style={styles.input}
              />
            </View>

            <TouchableOpacity style={styles.profileIcon}>
              <User />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Main Scroll View */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 70 }}
        >
          {/* Recommended Books Section */}
          <Text style={styles.sectionTitle}>Recommended for you</Text>
          {/* Swap / Buy Tabs */}
          <View style={styles.tabContainer}>
            {["Swap", "Buy"].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={[styles.tabBtn, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeText,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendedBooks
              .filter((book) => book.type === activeTab)
              .map((book) => (
                <View key={book.id} style={styles.bookCard}>
                  <Image
                    source={{ uri: book.image }}
                    style={styles.bookImage}
                  />
                  <Text numberOfLines={2} style={styles.bookName}>
                    {book.name}
                  </Text>
                  <Text style={styles.bookAuthor}>{book.author}</Text>

                  <TouchableOpacity style={styles.detailsButton}>
                    <Text style={styles.buttonText}>Details</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
          <View style={styles.divider} />

          {/* Browse Books Section */}
          <Text style={[styles.sectionTitle]}>Browse Books</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 10,
              paddingBottom: 20,
            }}
          >
            {browsebooks.map((book) => (
              <View key={book.id} style={styles.bookCard}>
                <Image source={{ uri: book.image }} style={styles.bookImage} />
                <Text style={styles.bookName}>{book.name}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Navigation Bar */}

        <View style={styles.bottomNav}>
          <TouchableOpacity>
            <House size={24} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Bell size={24} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Book size={24} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Calendar size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#5B5143",
    paddingTop: (StatusBar.currentHeight || 0) + 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "Georgia",
    color: "#ffffff",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },

  searchBox: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 120,
    flex: 1,
    marginRight: 20,
    alignItems: "center",
  },

  profileIcon: {
    marginLeft: 20,
  },
  divider: {
    height: 1.5,
    backgroundColor: "#000000",
  },

  input: {
    marginLeft: 5,
    flex: 1,
  },

  tabContainer: {
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 10,
    padding: 10,
  },

  tabBtn: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#A79B82",
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: "#A79B82",
  },

  tabText: {
    fontSize: 14,
    fontFamily: "Nunito",
  },

  activeText: {
    color: "#000000",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    fontFamily: "Georgia",
    paddingLeft: 10,
  },

  bookCard: {
    backgroundColor: "#ffffff",
    width: 150,
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  bookImage: {
    width: 110,
    height: 170,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  bookName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Nunito",
    height: 40,
    marginBottom: 2,
  },

  bookAuthor: {
    fontSize: 12,
    color: "#201212",
    textAlign: "center",
    fontFamily: "Nunito",
    marginBottom: 10,
  },

  detailsButton: {
    backgroundColor: "#5B5143",
    fontFamily: "Nunito",
    padding: 6,
    borderRadius: 5,
    margin: 5,
    width: 80,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
  bottomNav: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#a7a097",
    borderTopWidth: 1,
    borderColor: "#130f0f",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  navIcon: {
    width: 24,
    height: 24,
    tintColor: "#000000",
  },
});
