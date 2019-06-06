<template>
    <div id="app">
        <h1 id="title">mouse's portfolio.</h1>
        <br>
        <br>
        <about/>
        <br>
        <skill/>
    </div>
</template>

<script>
import about from "./components/about.vue";
import skill from "./components/skill.vue";

export default {
    name: "app",
    components: {
        about,
        skill
    }
};
</script>
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-family: "ink free";
}
h1#title {
    color: #93bbdf;
}
</style>
