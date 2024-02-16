import { j as json, e as error } from "../../../../chunks/index.js";
const GET = async () => {
  try {
    const articles = await Promise.all(
      Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/content/posts/hello-world/post.md": () => import("../../../../chunks/post.js"), "/src/lib/content/posts/learn-node/post.md": () => import("../../../../chunks/post2.js") })).map(
        async ([path, resolver]) => {
          const resolvedData = await resolver();
          if (typeof resolvedData === "object" && resolvedData != null) {
            if ("metadata" in resolvedData) {
              const metadata = resolvedData.metadata;
              const articleMetadata = metadata;
              const slug = path.slice(23, -8);
              return { slug, ...articleMetadata };
            }
          }
        }
      )
    );
    return json(articles);
  } catch (err) {
    error(500, "Internal server error");
  }
};
export {
  GET
};
