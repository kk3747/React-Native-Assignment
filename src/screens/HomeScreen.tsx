import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const stories = [
  { id: '1', name: 'ij_roy', image: require('../../assets/stories/1.jpeg') },
  { id: '2', name: 'akashsa.__', image: require('../../assets/stories/2.jpeg') },
  { id: '3', name: 'melayus', image: require('../../assets/stories/3.jpeg') },
  { id: '4', name: 'koomal..', image: require('../../assets/stories/4.jpeg') },
  { id: '5', name: 'anshu__d...', image: require('../../assets/stories/5.jpeg') },
  { id: '6', name: 'fairzyana', image: require('../../assets/stories/6.jpeg') },
];

const posts = [
  {
    id: '1',
    user: 'random_user',
    caption: 'Smile Everyday',
    profileImage: require('../../assets/profilePic.jpeg'),
    postImage: require('../../assets/post.jpeg'),
    date: '28 jan 2025',
    likes: '200k',
    views: '1.4M',
  },
  {
    id: '2',
    user: 'random_user',
    caption: 'Coding Mood 😎',
    profileImage: require('../../assets/profilePic.jpeg'),
    postImage: require('../../assets/post.jpeg'),
    date: '27 jan 2025',
    likes: '150k',
    views: '900k',
  },
];

const HomeScreen = () => {
  const renderStory = ({ item }: any) => (
    <View style={styles.storyItem}>
      <Image source={item.image} style={styles.storyImage} />
      <Text style={styles.storyText}>{item.name}</Text>
    </View>
  );

  const renderPost = ({ item }: any) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.profileLeft}>
          <Image source={item.profileImage} style={styles.profilePic} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.profileName}>{item.user}</Text>
            <Text style={styles.postDate}>{item.date}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.followBtn}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <Image source={item.postImage} style={styles.postImage} />

      <View style={styles.reactionsRow}>
        <View style={styles.leftReaction}>
          <Image source={require('../../assets/activity/comment.png')} style={styles.reactionIcon} />
          <Text style={styles.reactionText}>231.4K</Text>
        </View>

        <View style={styles.rightReactions}>
          <Image source={require('../../assets/activity/like.png')} style={styles.reactionIcon} />
          <Text style={styles.reactionText}>{item.likes}</Text>
          <Image source={require('../../assets/activity/share.png')} style={[styles.reactionIcon, { marginLeft: 20 }]} />
          <Text style={styles.reactionText}>{item.views}</Text>
        </View>
      </View>

      <View style={styles.captionSection}>
        <Text style={styles.caption}>
          <Text style={styles.profileName}>{item.user} </Text>
          {item.caption}
        </Text>
        <Text style={styles.moreText}>...more</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        
        <Image
          source={require('../../assets/profilePic.jpeg')} 
          style={styles.topBarProfilePic}
        />
        <Text style={styles.topBarTitle}>TOUCH</Text>
      </View>

      <FlatList
        data={stories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderStory}
        contentContainerStyle={styles.storiesContainer}
      />

      <View style={styles.divider} />

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={styles.bottomNavWrapper}>
        <Svg
          width={width}
          height={75}
          viewBox={`0 0 ${width} 75`}
          style={styles.curveSvg}
        >
          <Path
            d={`M0,20 
                C${width * 0.25},0 ${width * 0.75},0 ${width},20 
                L${width},75 
                L0,75 
                Z`}
            fill="#FF69B4"
          />


        </Svg>
        <View style={styles.bottomNav}>
          <Image source={require('../../assets/icons/home.png')} style={styles.icon} />
          <Image source={require('../../assets/icons/search.png')} style={styles.icon} />
          <Image source={require('../../assets/icons/hacker.png')} style={styles.icon} />
          <Image source={require('../../assets/icons/developer.png')} style={styles.icon} />
          <Image source={require('../../assets/icons/add.png')} style={styles.icon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    backgroundColor: '#FF69B4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  storiesContainer: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    height: 110,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    borderColor: '#FF69B4',
    borderWidth: 3,
  },
  storyText: {
    marginTop: 6,
    fontSize: 14,
    textAlign: 'center',
    width: 60,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  postDate: {
    fontSize: 12,
    color: 'gray',
  },
  followBtn: {
    backgroundColor: '#FF69B4',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  captionSection: {
    marginTop: 10,
    marginLeft: 6,
  },
  caption: {
    fontSize: 14,
    marginBottom: 6,
  },
  moreText: {
    color: 'gray',
    fontSize: 13,
  },
  reactionIcon: {
    width: 30,
    height: 30,
    tintColor: 'black',
    marginLeft: 20,
    marginRight: 5,
  },
  reactionText: {
    fontSize: 14,
  },
  reactionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  leftReaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightReactions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomNavWrapper: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 75,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  curveSvg: {
    position: 'absolute',
    bottom: 0,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    paddingBottom: 15,
    position: 'absolute',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'black',
  },
  topBarProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  
});
