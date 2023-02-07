<script lang="ts">
  import Project from '$lib/components/modules/Project.svelte';
  import Link from '$lib/components/elements/Link.svelte';
  import SectionName from '$lib/components/elements/SectionName.svelte';
  import Spaser from '$lib/components/elements/Spaser.svelte';
  import { projects } from './Works.css';
</script>

<section id="works">
  <SectionName>My Works</SectionName>
  <Spaser size={4} />
  <div class={projects}>
    <Project
      name="Portfolio"
      link="https://portfolio.mousedev.page/"
      libraries={['Svelte', 'TypeScript', 'Vite', 'Tailwind CSS']}
    >
      <p>ポートフォリオサイト</p>
      <p>
        気になっていたVueやReactの変わりになるだろう
        <Link href="https://svelte.dev">Svelte</Link>を使って開発しました。
      </p>
      <p>
        <Link href="https://vitejs.dev/">Vite</Link>の
        <Link
          href="https://vitejs.dev/guide/features.html#hot-module-replacement"
          >HMR</Link
        >
        のおかげで素早い開発ができました。
      </p>
    </Project>
    <Project
      name="Ecstar"
      github={{ username: 'Ecstarjs' }}
      link="https://ecstar.js.org"
      libraries={['Discord', 'Node.js', 'TypeScript']}
    >
      <p>
        <Link href="https://discord.js.org">Discrod.js</Link>のフレームワーク
      </p>
      <p>
        Discrod.jsには簡単だけどしっかり使えるフレームワークが無かったので作成した。（使うまでのコストが大きい代わりに機能が豊富なものは多かった）
      </p>
      <p><span class="font-bold">最も簡単</span>を目標に作成している。</p>
    </Project>
    <Project
      name="eslint-config"
      link="https://eslint-config.mouse484.vercel.app"
      libraries={['ESLint', 'JavaScript']}
    >
      <p>
        <Link href="https://github.com/mouse484/eslint-config">ESLint</Link>
        の構成とそのレジストリ
      </p>
      <p>
        ESLintの構成をNodeやBrowser、TypeScriptなど用にカスタマイズして用意している。
      </p>
      <p>
        npm Registryに公開するのではなくGitHub上から取得してインストールできる
        自作レジストリ からインストールできるようにしている。
      </p>
    </Project>
  </div>
</section>
