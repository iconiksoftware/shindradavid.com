import { e as error } from "../../../../chunks/index.js";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { getHighlighterCore } from "shiki/core";
import getWasm from "shiki/wasm";
import matter from "gray-matter";
import { e as read_implementation, b as base, m as manifest } from "../../../../chunks/server.js";
import { a as b64_decode } from "../../../../chunks/utils.js";
const highlighter = await getHighlighterCore({
  themes: [import("shiki/themes/vitesse-light.mjs"), import("shiki/themes/vitesse-dark.mjs")],
  langs: [
    import("shiki/langs/javascript.mjs"),
    import("shiki/langs/html.mjs"),
    import("shiki/langs/css.mjs"),
    import("shiki/langs/scss.mjs"),
    import("shiki/langs/typescript.mjs"),
    import("shiki/langs/python.mjs"),
    import("shiki/langs/c.mjs"),
    import("shiki/langs/sql.mjs"),
    import("shiki/langs/nginx.mjs"),
    import("shiki/langs/markdown.mjs"),
    import("shiki/langs/lua.mjs"),
    import("shiki/langs/json.mjs"),
    import("shiki/langs/go.mjs"),
    import("shiki/langs/docker.mjs"),
    import("shiki/langs/dart.mjs")
  ],
  loadWasm: getWasm
});
const parseMarkdown = async (markdownFile) => {
  const { content, data } = matter(markdownFile);
  const result = await unified().use(remarkParse).use(remarkRehype).use(rehypeAutolinkHeadings, { behavior: "append" }).use(rehypeSlug).use(rehypeShikiFromHighlighter, highlighter, {
    // or `theme` for a single theme
    themes: {
      light: "vitesse-light",
      dark: "vitesse-dark"
    }
  }).use(rehypeStringify).process(content);
  return {
    content: result.toString(),
    frontmatter: data
  };
};
function read(asset) {
  ;
  if (!read_implementation) {
    throw new Error(
      "No `read` implementation was provided. Please ensure that your adapter is up to date and supports this feature"
    );
  }
  if (asset.startsWith("data:")) {
    const [prelude, data] = asset.split(";");
    const type = prelude.slice(5) || "application/octet-stream";
    if (data.startsWith("base64,")) {
      const decoded2 = b64_decode(data.slice(7));
      return new Response(decoded2, {
        headers: {
          "Content-Length": decoded2.byteLength.toString(),
          "Content-Type": type
        }
      });
    }
    const decoded = decodeURIComponent(data);
    return new Response(decoded, {
      headers: {
        "Content-Length": decoded.length.toString(),
        "Content-Type": type
      }
    });
  }
  const file = asset.slice(base.length + 1);
  if (file in manifest._.server_assets) {
    const length = manifest._.server_assets[file];
    const type = manifest.mimeTypes[file.slice(file.lastIndexOf("."))];
    return new Response(read_implementation(file), {
      headers: {
        "Content-Length": "" + length,
        "Content-Type": type
      }
    });
  }
  throw new Error(`Asset does not exist: ${file}`);
}
const load = async ({ params }) => {
  try {
    const slug = params.slug;
    const asset = read(`/src/lib/content/posts/${slug}/post.md`);
    const file = await asset.text();
    const { content, frontmatter } = await parseMarkdown(file);
    return { frontmatter, content };
  } catch (err) {
    console.error(err);
    error(500, "Internal server error");
  }
};
export {
  load
};
