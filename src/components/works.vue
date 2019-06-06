<template>
    <div class="works">
        <h2>Works</h2>
        <ul class="list">
            <li v-on:click="jump">
                <h5>Ecstar</h5>DiscordのBotをNode.jsで作成するためのモジュール"Discord.js"をより簡単に実装するためのフレームワーク。
                <a
                    href="https://github.com/mouse484/Ecstar"
                >
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li>
                <h5>Esc-site</h5>私が管理している[Esc]™Groupの公式サイト。VuePressで作成。
                <a href="https://esc-group.tk/">
                    <i class="fas fa-external-link-alt"></i>
                </a>&nbsp;
                <a href="https://github.com/Escgroup/Esc-site">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li>
                <h5>Esc-bot</h5>[Esc]™Group Discordサーバーの管理＆便利系Bot
                <a href="https://github.com/Escgroup/Esc-bot">
                    <i class="fab fa-github"></i>
                </a>
            </li>
            <li>
                <h5>Portfolio</h5>mouseのポートフォリオ、このページ
                <a href="https://portfolio.mouse-484.tk/">
                    <i class="fas fa-external-link-alt"></i>
                </a>&nbsp;
                <a href="https://github.com/mouse484/portfolio">
                    <i class="fab fa-github"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<style>
div.works {
    font-family: "Noto Sans JP", sans-serif;
    max-width: 400px;
    margin: 0 auto;
}
div.works ul {
    list-style-type: none;
    text-align: left;
}
ul.list li {
    display: inline-flex-box;
}
</style>

