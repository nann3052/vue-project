<template>
  <div>
    <h2>Posts</h2>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id"></article>
      <h3>{{ posts.description }}</h3>
  </div>
</template>

<script>

import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  firestore: {
    posts: postRef.title,
  }
};

</script>

<style>
</style>