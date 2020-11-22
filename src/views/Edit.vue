<template>
  <div class="edit">
    <h1>You can edit all your posts on this page</h1>
    <form>
      <h2>Edit post</h2>
      <input type="text" id="title-edit" required />
      <input type="text" id="description-edit" required />
      <button type="button" name="button" onclick="updateUser()">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#postForm {
  text-align: center;
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
  margin: 2em auto 0;
  background-color: lightblue;
  padding: 1em 1em 2em;
}
input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}

button {
  display: block;
  margin: auto;
  text-align: center;
  font-weight: 200;
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: lightblue;
  background-color: #f77070;
  width: 100%;
  max-width: 350px;
}
</style>
