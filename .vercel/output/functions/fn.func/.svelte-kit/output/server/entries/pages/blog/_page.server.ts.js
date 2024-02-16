const load = async ({ parent }) => {
  const { posts } = await parent();
  return { posts };
};
export {
  load
};
