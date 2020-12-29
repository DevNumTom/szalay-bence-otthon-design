import path from "path";
import { Adataim } from "../models";
import { fetchContent } from "../general-fetch";

const adataimDirectory = path.join(process.cwd(), "src/content/adataim");

let adataimCache: Adataim;

export function getAdataim(): Adataim {
    if (adataimCache) {
        return adataimCache;
    }
    adataimCache = fetchContent<Adataim>(adataimDirectory)[0];
    return adataimCache;
}