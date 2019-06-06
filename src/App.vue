<template>
    <div id="app">
        <h1 id="title">mouse's Portfolio.</h1>
        <br>
        <br>
        <profile/>
        <br>
        <skill/>
        <br>
        <works/>
        <br>
        <br>
        <footer>
            <a href="https://github.com/mouse484">
                <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://twitter.com/mouse_484">
                <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="mailto:escmouse484@gmail.com">
                <i class="far fa-paper-plane fa-2x"></i>
            </a>
        </footer>
    </div>
</template>

<script>
import profile from "./components/profile.vue";
import skill from "./components/skill.vue";
import works from "./components/works.vue";

export default {
    name: "app",
    components: {
        profile,
        skill,
        works
    }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merienda&display=swap");
@import url("https://use.fontawesome.com/releases/v5.6.1/css/all.css");
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
    color: #9cc2e2;
    font-family: "Merienda", cursive;
}
a:link {
    color: #8f8fcf;
}
a:visited {
    color: #7a7ab9;
}
a:hover {
    color: #00ff62;
}
a:active {
    color: #ff8000;
}

footer a {
    padding: 1em;
}
</style>
