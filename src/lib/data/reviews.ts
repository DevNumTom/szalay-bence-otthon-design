import path from "path";
import { Review } from "../models";
import { fetchContent } from "../general-fetch";

const reviewsDirectory = path.join(process.cwd(), "src/content/reviews");

let reviewsCache: Review[];

export function getReviews(): Review[] {
    if (reviewsCache) {
        return reviewsCache;
    }
    reviewsCache = fetchContent<Review>(reviewsDirectory);
    return reviewsCache;
}