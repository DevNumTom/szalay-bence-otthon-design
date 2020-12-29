export type Szolgaltatas = {
    readonly title: string;
    readonly thumbnail: string;
};

export type Review = {
    readonly name: string;
    readonly review: string;
    readonly status: string;
};

export type GalleryItem = {
    readonly image: string;
}

export type Munka = {
    readonly name: string;
    readonly cover: string;
    readonly slug: string;
    readonly gallery: GalleryItem[];
    readonly before_gallery: GalleryItem[];
};

export type Adataim = {
    readonly phone: string;
    readonly email: string;
    readonly facebook: string;
};