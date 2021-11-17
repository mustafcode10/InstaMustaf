import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabsIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/material-sharp/344/ffffff/home.png",
    inactive: "https://img.icons8.com/material-outlined/2x/ffffff/home--v2.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios/2x/ffffff/search-more.png",
    inactive: "https://img.icons8.com/ios-filled/2x/ffffff/search.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/2x/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/2x/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/ios-filled/2x/ffffff/shop-two.png",
    inactive: "https://img.icons8.com/dotty/2x/ffffff/shop-two.png",
  },
  {
    name: "Profile",
    active:
      "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-1/s320x320/251500216_4577582788951742_7047083087247365839_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGkf7X2j2-vKuZwq-fSyTdPUTl1NS-80atROXU1L7zRq1qshKi4YqUry0pfKg8rlnQdP7eDVdnt51S9sbLEdkZc&_nc_ohc=hvHpfSrPrIIAX_kD2Nq&_nc_ht=scontent.famm2-3.fna&oh=ae311833ddd85cc826f55b04323a849f&oe=61AD14EF",
    inactive:
      "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-1/s320x320/251500216_4577582788951742_7047083087247365839_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGkf7X2j2-vKuZwq-fSyTdPUTl1NS-80atROXU1L7zRq1qshKi4YqUry0pfKg8rlnQdP7eDVdnt51S9sbLEdkZc&_nc_ohc=hvHpfSrPrIIAX_kD2Nq&_nc_ht=scontent.famm2-3.fna&oh=ae311833ddd85cc826f55b04323a849f&oe=61AD14EF",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name) }>
      <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
       style={[styles.icon,
        icon.name === "Profile" ? styles.profilePic() : null,
        activeTab === "Profile" && icons.name  === activeTab ? styles.profilePic(activeTab) :null
        ]} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider orientation="vertical" width={1} />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
 wrapper: {
     position: "relative",
     width: "100%",
      bottom: '3%',
     zIndex: 999,
     backgroundColor: "#000",
 },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: (activeTab = '')=>( {
      borderRadius: 50,
      borderWidth: activeTab === "Profile" ? 2 : 0,
      borderColor: "#fff"
  })
});
