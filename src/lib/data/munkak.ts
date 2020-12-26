import path from "path";
import { Munka } from "../models";
import { fetchContent } from "../general-fetch";

const munkakDirectory = path.join(process.cwd(), "src/content/munkak");

let munkakCache: Munka[];

export function getMunkak(): Munka[] {
    if (munkakCache) {
        return munkakCache;
    }
    munkakCache = fetchContent<Munka>(munkakDirectory);
    return munkakCache;
}