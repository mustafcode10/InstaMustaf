import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/10/coding1.jpg",
    user: USERS[0].user,
    likes: 5000,
    caption: "good vibes",
    profile_picture: USERS[0].image,
    comments: [
      { user: "Mustafa" },
      {
        comment: "Hi! Once I wake up, I will  finally be ready to code this up",
      },
      { user: "Bakar" },
      { comment: "keep it man" },
    ],
  },
  {
    imageUrl: "https://i.ytimg.com/vi/SgqYX20Ruag/maxresdefault.jpg",
    user: USERS[1].user,
    likes: 7000,
    caption: "usmle exam ",
    profile_picture: USERS[1].image,
    comments: [
      { user: "Mohamed" },
      { comment: "Medical exam" },
      { user: "Mustaf" },
      { comment: "all the best" },
    ],
  },
    {
    imageUrl: "https://p4.wallpaperbetter.com/wallpaper/787/565/98/astronaut-4k-8k-hd-wallpaper-preview.jpg",
    user: USERS[2].user,
    likes: 6000,
    caption: "aestronaut",
    profile_picture: USERS[2].image,
    comments: [
      { user: "Bakar" },
      { comment: "aestronaut" },
      { user: "Mustaf" },
      { comment: "all the best" },
    ],
  },
];
