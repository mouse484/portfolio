<script lang="ts">
  import Project from '../../Works/Project.svelte';
  import Link from '$lib/Link.svelte';
  import SectionName from '$lib/components/element/SectionName.svelte';
</script>

<section id="works" class="mx-auto text-center">
  <SectionName>My Works</SectionName>

  <div class="flex flex-wrap gap-2 justify-center mt-8">
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
      name="Portfolio"
      link="https://portfolio.mouse484.vercel.app/"
      libraries={['SvelteKit', 'Svelte', 'Vite', 'Windi CSS']}
    >
      <p>ポートフォリオサイト</p>
      <p>
        気になっていたVueやReactの変わりになるだろう<Link
          href="https://svelte.dev">Svelte</Link
        >と Tailwind CSSに機能追加して早くなったらしい
        <Link href="https://windicss.org/">Windi CSS</Link>
        を使って開発しました。
        <Link href="https://vitejs.dev/">Vite</Link>の
        <Link
          href="https://vitejs.dev/guide/features.html#hot-module-replacement"
          >HMR</Link
        >
        のおかげで素早い開発ができました。
      </p>
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
        <Link href="https://eslint-config.mouse484.vercel.app"
          >自作レジストリ</Link
        >
        からインストールできるようにしている。
      </p>
    </Project>
  </div>
</section>
