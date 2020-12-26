import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

export function fetchContent<T>(directory: string): T[] {
    const fileNames = fs.readdirSync(directory);
    return fileNames
        .filter((it) => it.endsWith(".mdx"))
        .map((fileName) => {
            // Read markdown file as string
            const fullPath = path.join(directory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents, {
                engines: {
                    yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object,
                },
            });
            return matterResult.data as T;
        });
}
