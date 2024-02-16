import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { content, frontmatter } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main><h1>${escape(frontmatter.title)}</h1> <section><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></section></main>`;
});
export {
  Page as default
};
