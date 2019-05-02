import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Animated
} from "react-native";
import config from "../../config/index";
export default class Post extends React.Component {
  constructor(props) {
    super();
    this.state = {
      liked: props.post.liked
    };
  }
  animatedValue = new Animated.Value(0);
  togleLike() {
    this.setState(state => {
      const newLiked = !state.liked;
      if (newLiked) {
        Animated.sequence([
          Animated.spring(this.animatedValue, {
            toValue: 1
            //useNativeDriver: true
          }),
          Animated.spring(this.animatedValue, {
            toValue: 0
            //userNativeDriver: true
          })
        ]).start();
      }
      return { liked: newLiked };
    });
  }
  lastTap = null;
  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      if (!this.state.liked) this.togleLike();
    } else {
      this.lastTap = now;
    }
  };
  renderComments() {
    return this.props.post.comments.map(comment => {
      return (
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", paddingHorizontal: 3 }}>
              {comment.username}
            </Text>
            <Text>{comment.commentText}</Text>
          </View>
        </View>
      );
    });
  }
  render() {
    //console.warn(this.props.post);
    return (
      <View
        style={{
          flex: 1,
          width: 100 + "%",
          height: 100 + "%"
        }}
      >
        {/**Post*/}
        <View>
          {/**Post Header Bar */}
          <View style={styles.newsBar}>
            <View style={styles.userProfile}>
              <Image
                source={{
                  uri: this.props.post.userPicURL
                }}
                style={styles.userPics}
              />
              <Text style={{ fontSize: 18 }}>{this.props.post.username}</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 50,
                  transform: [{ rotate: "-90deg" }]
                }}
              >
                ...
              </Text>
            </View>
          </View>
          {/**End of Post Header bar */}
          <TouchableWithoutFeedback
            onPress={() => {
              this.handleDoubleTap();
            }}
          >
            <ImageBackground
              style={[styles.img, { aspectRatio: this.props.post.aspectRatio }]}
              source={{
                uri: this.props.post.postImage
              }}
            >
              <Animated.Image
                style={[
                  this.state.liked ? { tintColor: "rgb(252,61,57)" } : null,
                  {
                    opacity: this.animatedValue
                  }
                ]}
                source={config.images.heartIcon}
              />
            </ImageBackground>
          </TouchableWithoutFeedback>
          <View style={styles.actionBar}>
            <TouchableOpacity
              onPress={() => {
                this.togleLike();
              }}
            >
              <Image
                source={config.images.heartIcon}
                style={[
                  styles.actionIcons,
                  this.state.liked ? { tintColor: "rgb(252,61,57)" } : null
                ]}
              />
            </TouchableOpacity>
            <Image
              source={config.images.commentIcon}
              style={styles.actionIcons}
            />
            <Image
              source={config.images.shareIcon}
              style={styles.actionIcons}
            />
          </View>
          {/*Post Dexcription */}
          <View style={{ paddingHorizontal: 5 }}>
            <Text>{this.props.post.likesCount} Likes</Text>
            {/**User of Post and Caption */}
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", paddingHorizontal: 3 }}>
                {this.props.post.username}
              </Text>
              <Text>{this.props.post.caption}</Text>
            </View>
            {/**End of users Post and Caption */}
            {/*Commments*/}
            {this.renderComments()}
            {/*End Comments*/}
          </View>
          {/**End Post Description */}
        </View>
        {/**End of Post */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  newsBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  img: {
    resizeMode: "contain",
    width: 100 + "%",
    height: undefined,
    alignItems: "center",
    justifyContent: "center"
  },
  userProfile: {
    flexDirection: "row",
    alignItems: "center"
    //justifyContent: "flex-start"
  },
  userPics: { width: 40, height: 40, borderRadius: 20 },
  actionIcons: { width: 30, height: 30, paddingHorizontal: 2 },
  actionBar: {
    flex: 1,
    height: config.styleConstants.rowHeight,
    flexDirection: "row",
    borderColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: "center"
  }
});
