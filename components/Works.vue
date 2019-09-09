<template>
  <div>
    <h2>Works</h2>
    <ul class="ml-1 mr-4 d-flex flex-column">
      <li>
        <h5>Ecstar</h5>
        <p>
          DiscordのAPIを操作するNode.js用の強力なモジュール"Discord.js"で簡単にBotを作れるようにする事を目指して作っているフレームワーク。
          Discord.js-commandoを超えることを目指してます
        </p>
        <a
          href="https://github.com/mouse484/Ecstar"
          aria-label="EcstarをGitHubで見る"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li>
        <h5>Portfolio</h5>
        <p>
          このポートフォリオです、見やすさにこだわって作成しました
          このサイトはNuxt.jsとBootstrapで作成しました
        </p>
        <a href="https://portfolio.mouse-484.tk/" aria-label="このサイトのURL">
          <i class="fas fa-external-link-alt"></i> </a
        >&nbsp;
        <a
          href="https://github.com/mouse484/portfolio"
          aria-label="ポートフォリオをGitHubで見る"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  text-align: left;
}
li {
  display: inline-flex-box;
  margin-top: 1em;
}
h5 {
  margin-top: 1em;
}
p {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
