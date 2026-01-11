import { writeFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod/v4";
import { registryFileSchema } from "../schema/schema.js";

const cwd = process.cwd();
const obj = z.toJSONSchema(registryFileSchema);
// biome-ignore lint/complexity/useLiteralKeys: ''
if (obj.properties) obj.properties["$schema"] = { type: "string" };
const str = JSON.stringify(obj);
const dest = path.join(cwd, "../../apps/website/public", "item-schema.json");
writeFileSync(dest, str);
