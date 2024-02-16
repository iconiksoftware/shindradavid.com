import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main><h1 data-svelte-h="svelte-dbxyy8">Blog</h1> <section><div>${each(posts, (post) => {
    return `<a href="${"/blog/" + escape(post.slug, true)}"><article><h3>${escape(post.title)}</h3></article> </a>`;
  })}</div></section></main>`;
});
export {
  Page as default
};
