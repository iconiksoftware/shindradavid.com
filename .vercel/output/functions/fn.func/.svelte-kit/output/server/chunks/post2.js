import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Learn Node",
  "publishedOn": "2022-10-12T18:28:31.715Z",
  "modifiedOn": "2022-10-12T17:28:31.715Z",
  "description": "This is the description for the hello world article",
  "sourceCodeUrl": "https://github.com",
  "liveSiteUrl": "https://vercel.com",
  "tags": [
    "html",
    "sveltekit",
    "scss",
    "css",
    "svelte",
    "python",
    "javascript",
    "typescript",
    "node",
    "angular"
  ]
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-nchs91">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit quo quae consectetur consequatur nihil nulla dolorem similique a nemo labore ab rem magnam velit tempora, illo incidunt ullam? Nisi.
Nisi inventore quaerat asperiores rerum necessitatibus illum quibusdam aliquid minus aspernatur animi, ducimus hic voluptate recusandae culpa quod! Necessitatibus corrupti ut aut recusandae a. Dolorum facilis sit fugiat eos minus?
Hic eaque officiis repudiandae, iure sed id expedita asperiores nesciunt quaerat ullam consectetur officia ducimus blanditiis voluptates aliquid necessitatibus accusantium? Aliquam saepe quibusdam quod eveniet adipisci odit et itaque ex.
Officia ipsam soluta quod? Eos est tenetur odit culpa quidem rem eum, incidunt excepturi quas unde, recusandae porro a architecto consectetur nemo! Molestias voluptates neque facilis excepturi minima animi delectus.</p> <h2 data-svelte-h="svelte-ryk556">Hello world in HTML</h2> <pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-nchs91">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit quo quae consectetur consequatur nihil nulla dolorem similique a nemo labore ab rem magnam velit tempora, illo incidunt ullam? Nisi.
Nisi inventore quaerat asperiores rerum necessitatibus illum quibusdam aliquid minus aspernatur animi, ducimus hic voluptate recusandae culpa quod! Necessitatibus corrupti ut aut recusandae a. Dolorum facilis sit fugiat eos minus?
Hic eaque officiis repudiandae, iure sed id expedita asperiores nesciunt quaerat ullam consectetur officia ducimus blanditiis voluptates aliquid necessitatibus accusantium? Aliquam saepe quibusdam quod eveniet adipisci odit et itaque ex.
Officia ipsam soluta quod? Eos est tenetur odit culpa quidem rem eum, incidunt excepturi quas unde, recusandae porro a architecto consectetur nemo! Molestias voluptates neque facilis excepturi minima animi delectus.</p> <h2 data-svelte-h="svelte-or0jz2">Hello world in CSS</h2> <pre class="language-css"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-nchs91">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit quo quae consectetur consequatur nihil nulla dolorem similique a nemo labore ab rem magnam velit tempora, illo incidunt ullam? Nisi.
Nisi inventore quaerat asperiores rerum necessitatibus illum quibusdam aliquid minus aspernatur animi, ducimus hic voluptate recusandae culpa quod! Necessitatibus corrupti ut aut recusandae a. Dolorum facilis sit fugiat eos minus?
Hic eaque officiis repudiandae, iure sed id expedita asperiores nesciunt quaerat ullam consectetur officia ducimus blanditiis voluptates aliquid necessitatibus accusantium? Aliquam saepe quibusdam quod eveniet adipisci odit et itaque ex.
Officia ipsam soluta quod? Eos est tenetur odit culpa quidem rem eum, incidunt excepturi quas unde, recusandae porro a architecto consectetur nemo! Molestias voluptates neque facilis excepturi minima animi delectus.</p> <h2 data-svelte-h="svelte-khoixs">Hello world in Javascript</h2> <pre class="language-js"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// this is javascript</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre> <h3 data-svelte-h="svelte-1wphp2w">Hello world in typescript</h3> <pre class="language-ts"><!-- HTML_TAG_START -->${`<code class="language-ts"><span class="token comment">// this is typescript</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-nchs91">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit quo quae consectetur consequatur nihil nulla dolorem similique a nemo labore ab rem magnam velit tempora, illo incidunt ullam? Nisi.
Nisi inventore quaerat asperiores rerum necessitatibus illum quibusdam aliquid minus aspernatur animi, ducimus hic voluptate recusandae culpa quod! Necessitatibus corrupti ut aut recusandae a. Dolorum facilis sit fugiat eos minus?
Hic eaque officiis repudiandae, iure sed id expedita asperiores nesciunt quaerat ullam consectetur officia ducimus blanditiis voluptates aliquid necessitatibus accusantium? Aliquam saepe quibusdam quod eveniet adipisci odit et itaque ex.
Officia ipsam soluta quod? Eos est tenetur odit culpa quidem rem eum, incidunt excepturi quas unde, recusandae porro a architecto consectetur nemo! Molestias voluptates neque facilis excepturi minima animi delectus.</p> <h2 data-svelte-h="svelte-zjrmkr">Hello world in Python</h2> <pre class="language-py"><!-- HTML_TAG_START -->${`<code class="language-py"><span class="token comment"># this is python</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Hello world'</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre> <h2 data-svelte-h="svelte-ch3ss8">Hello world in C</h2> <pre class="language-c"><!-- HTML_TAG_START -->${`<code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token char">'Hello world'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-nchs91">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit quo quae consectetur consequatur nihil nulla dolorem similique a nemo labore ab rem magnam velit tempora, illo incidunt ullam? Nisi.
Nisi inventore quaerat asperiores rerum necessitatibus illum quibusdam aliquid minus aspernatur animi, ducimus hic voluptate recusandae culpa quod! Necessitatibus corrupti ut aut recusandae a. Dolorum facilis sit fugiat eos minus?
Hic eaque officiis repudiandae, iure sed id expedita asperiores nesciunt quaerat ullam consectetur officia ducimus blanditiis voluptates aliquid necessitatibus accusantium? Aliquam saepe quibusdam quod eveniet adipisci odit et itaque ex.
Officia ipsam soluta quod? Eos est tenetur odit culpa quidem rem eum, incidunt excepturi quas unde, recusandae porro a architecto consectetur nemo! Molestias voluptates neque facilis excepturi minima animi delectus.</p> <p data-svelte-h="svelte-nchs91">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum suscipit quo quae consectetur consequatur nihil nulla dolorem similique a nemo labore ab rem magnam velit tempora, illo incidunt ullam? Nisi.
Nisi inventore quaerat asperiores rerum necessitatibus illum quibusdam aliquid minus aspernatur animi, ducimus hic voluptate recusandae culpa quod! Necessitatibus corrupti ut aut recusandae a. Dolorum facilis sit fugiat eos minus?
Hic eaque officiis repudiandae, iure sed id expedita asperiores nesciunt quaerat ullam consectetur officia ducimus blanditiis voluptates aliquid necessitatibus accusantium? Aliquam saepe quibusdam quod eveniet adipisci odit et itaque ex.
Officia ipsam soluta quod? Eos est tenetur odit culpa quidem rem eum, incidunt excepturi quas unde, recusandae porro a architecto consectetur nemo! Molestias voluptates neque facilis excepturi minima animi delectus.</p>`;
});
export {
  Post as default,
  metadata
};
