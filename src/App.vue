<template>
    <div id="app">
        <h1 id="title">mouse's portfolio.</h1>
        <br>
        <br>
        <profile/>
        <br>
        <skill/>
    </div>
</template>

<script>
import profile from "./components/profile.vue";
import skill from "./components/skill.vue";

export default {
    name: "app",
    components: {
        profile,
        skill
    }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-family: "Inconsolata", monospace;
    max-width: 700px;
    margin: 0 auto;
}
h1#title {
    color: #93bbdf;
}
</style>
