import { z } from "zod/v4";
import { registryItemSchema } from "../registry/schema.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { writeFileSync } from "node:fs";

const s = JSON.stringify(z.toJSONSchema(registryItemSchema));
const url = import.meta.url;
const filePath = fileURLToPath(url);
const dest = path.join(filePath, "../../registry", "schema", "item-schema.json");
writeFileSync(dest, s);