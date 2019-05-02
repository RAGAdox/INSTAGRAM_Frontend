import React from "react";
import { FlatList, ScrollView } from "react-native";
import { Post } from "../presentation";
const dataFetched = {
  posts: [
    {
      username: "Rishi Mukherjee",
      userPicURL:
        "http://www.myiconfinder.com/uploads/iconsets/8849499f9a253a6add1768da935298e5-instagram.png",
      postImage:
        "https://scontent-bom1-2.cdninstagram.com/vp/95cf39d72f92a827ae0721caa2e7c568/5D676269/t51.2885-15/e35/49542429_299804957380916_7446927426974242154_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com",
      caption: "INSTAGRAM POST #1",
      aspectRatio: 510 / 637,
      liked: true,
      likesCount: 102,
      commentCount: 2,
      comments: [
        {
          username: "RAGAdox",
          commentText: "App is in development"
        },
        {
          username: "Sneha",
          commentText: "Instagram Cloning"
        }
      ]
    },
    {
      username: "RAGAdox",
      userPicURL:
        "https://doc-0s-ao-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/teune6e41o5cigpqohuka1gv63rh4qj5/1556668800000/06223152687969640365/*/11JLp5xMhZfCO18TkUTnsdttkP8Eyg33z?e=download",
      postImage:
        "https://doc-10-ao-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/3duamovosmcpsd0umsntcp03u0qku31k/1556668800000/06223152687969640365/*/1pwvGZC69UeXXQmkJPfOb7-rm53hq6Rbv?e=download",
      caption: "Drive Home #Lucy",
      aspectRatio: 1366 / 768,
      liked: false,
      likesCount: 102,
      commentCount: 2,
      comments: [
        {
          username: "RAGAdox",
          commentText: "App is in development"
        },
        {
          username: "Sneha",
          commentText: "Instagram Cloning"
        }
      ]
    }
  ]
};
export default class PostFeed extends React.Component {
  _returnKey(post) {
    return post.toString();
  }
  render() {
    return (
      <FlatList
        data={dataFetched.posts}
        keyExtractor={this._returnKey}
        renderItem={({ item }) => <Post post={item} />}
      />
    );
  }
}
/*<ScrollView>
        <Post />
        <Post />
      </ScrollView>*/
