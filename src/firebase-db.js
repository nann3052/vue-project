// My own Firebase
import firebase from "firebase/app";
import "firebase/firestore";


export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyB2WP7n6bk7qA2dbQicBUvy_-ee-ALRKkQ",
        authDomain: "vue-project-27c6e.firebaseapp.com",
        databaseURL: "https://vue-project-27c6e.firebaseio.com",
        projectId: "vue-project-27c6e",
        storageBucket: "vue-project-27c6e.appspot.com",
        messagingSenderId: "286441540848",
        appId: "1:286441540848:web:c8dc21ab82b80381fa4635",
        measurementId: "G-FNLYHGH6JY"
    })
    .firestore();

export const postRef = db.collection("information");

// ------- watch the database ref for changes --
postRef.onSnapshot(function (snapshotData) {
    let posts = [];
    snapshotData.forEach(function (doc) {
        let post = doc.data();
        post.title = doc.title;
        posts.push(post);
    });
    appendPosts(posts);
});

let selectedPostId = "";

// ----- append posts to the DOM ---
function appendPosts(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
        htmlTemplate += `
    <article>
      <h2>${information.title}</h2>
      <button onclick="selectPost('${information.title}','${information.description}', '${information.year}')">Update</button>
      <button onclick="deletePost('${post.id}')">Delete</button>
    </article>
    `;
    }
    document.querySelector('#postForm').innerHTML = htmlTemplate;
}

// ------ Update the post -------

function selectPost(title, description) {
    // references to the input fields
    let titleInput = document.querySelector('#create_title');
    let mailInput = document.querySelector('#create_description');
    titleInput.value = title;
    descriptionInput.value = description;
    selectedPostId = id;
}

function updatePost() {
    let nameInput = document.querySelector('#create_title');
    let mailInput = document.querySelector('#create_description');

    let postToUpdate = {
        title: titleInput.value,
        description: descriptionInput.value
    };
    userRef.doc(selectedPostId).update(postToUpdate);
}

// ========== DELETE ==========
function deletePost(id) {
    console.log(id);
    userRef.doc(id).delete();
}



/*
//The firebase from Rasmus
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyD2J8RQqu2w6J2B6e4Mbn4ty_QEsHhVF0M",
        authDomain: "post-app-7cb59.firebaseapp.com",
        databaseURL: "https://post-app-7cb59.firebaseio.com",
        projectId: "post-app-7cb59",
        storageBucket: "post-app-7cb59.appspot.com",
        messagingSenderId: "508009210681",
        appId: "1:508009210681:web:abcd78e05897ce987afee8"
    })
    .firestore();

export const postRef = db.collection("posts");
*/