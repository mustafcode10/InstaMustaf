///// firebase rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 1, 1);
    }
  }
}
/////////// edit firebase rules //////////////////////////////////////////////////////////////////

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // match /{document=**} {
    //   allow read, write: if
    //       request.time < timestamp.date(2022, 1, 1);
    // }
    function isUseAuthenticated() {
         return request.auth != null
     }
    // security rules for group collection ('posts')    
    match /{path=**}/posts/{postId} {
        allow read, write: if isUseAuthenticated();
    }
    match /users/{userId} {
        allow read, write: if isUseAuthenticated();

    }
  }
}