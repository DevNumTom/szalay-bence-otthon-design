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

export function getMunkaWithPrevAndNextSlug(slug: string): [Munka, string, string] {
    const munkak = getMunkak();
    const index = munkak.findIndex(munka => munka.slug === slug);
    const prevSlug = munkak[index === 0 ? munkak.length - 1 : index - 1].slug;
    const nextSlug = munkak[index === munkak.length - 1 ? 0 : index + 1].slug;
    return [munkak[index], prevSlug, nextSlug];
}