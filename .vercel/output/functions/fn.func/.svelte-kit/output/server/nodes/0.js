import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BsIcgjwV.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.D8_uDsy1.js"];
export const stylesheets = [];
export const fonts = [];
