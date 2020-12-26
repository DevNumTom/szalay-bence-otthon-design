import path from "path";
import { Szolgaltatas } from "../models";
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