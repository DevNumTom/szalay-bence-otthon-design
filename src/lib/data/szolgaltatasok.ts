import path from "path";
import { AlSzolgaltatas, Szolgaltatas } from "../models";
import { fetchContent } from "../general-fetch";

const szolgaltatasokDirectory = path.join(process.cwd(), "src/content/szolgaltatasok");

let szolgaltatasokCache: Szolgaltatas[];

export function getSzolgaltatasok(): Szolgaltatas[] {
    if (szolgaltatasokCache) {
        return szolgaltatasokCache;
    }
    szolgaltatasokCache = fetchContent<Szolgaltatas>(szolgaltatasokDirectory);
    return szolgaltatasokCache;
}

export function getAllSzolgaltatasok(): (Szolgaltatas | AlSzolgaltatas)[] {
    const szolgaltatasok = getSzolgaltatasok();
    return szolgaltatasok
        .map((el) => {
            if (el.alSzolgaltatasok && el.alSzolgaltatasok.length) {
                return [el, ...el.alSzolgaltatasok];
            }
            return el;
        })
        .flat();
}

export function getSzolgaltatas(slug: string): Szolgaltatas | AlSzolgaltatas {
    const szolgaltatasok = getAllSzolgaltatasok();
    return szolgaltatasok.find(el => el.slug === slug);
}