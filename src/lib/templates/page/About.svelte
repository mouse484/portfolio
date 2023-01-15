<script lang="ts">
  import SectionName from '$lib/components/element/SectionName.svelte';
  import Spaser from '$lib/components/element/Spaser.svelte';
  import { japanese } from '$lib/style/text.css';
  import { section } from './section.css';
</script>

<section id="about" class={section}>
  <SectionName>About Me</SectionName>
  <Spaser size={2} />
  <div class={japanese}>
    <p>私はWeb、特にJavaScriptとその周辺技術が得意な学生です。</p>
    <p>
      現在はN高等学校ネットコースに在籍し、勉強をしつつ自由な時間でプログラミングをしています。
    </p>
  </div>
</section>
