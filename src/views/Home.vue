<template>
  <div class="home">
    <h1>Welcome!</h1>
    <h2>You can view all your posts here</h2>
    <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src

import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: {
    PostList,
  },
};
</script>
