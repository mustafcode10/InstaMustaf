import {USERS} from './users'

export const POSTS  = [
    {
        imageUrl: 'http://',
        user: USERS[0].user,
        likes: 5000,
        caption: "good vibes",
        profile_picture: USERS[0].image,
        comments: [
            { user: 'Mustafa'},
            {comment: 'Hi! Once I wake up, I will  finally be ready to code this up'},
             { user: 'Bakar'},
            {comment: 'keep it man'},
        ]
    },
        {
        imageUrl: 'http://',
        user: USERS[1].user,
        likes: 7000,
        caption: "usmle exam ",
        profile_picture: USERS[1].image,
        comments: [
            { user: 'Mohamed'},
            {comment: 'Medical exam'},
             { user: 'Mustaf'},
            {comment: 'all the best'}
        ]
    }
]