export type Szolgaltatas = {
    readonly title: string;
    readonly thumbnail: string;
    readonly desc: string;
    readonly alSzolgaltatasok: AlSzolgaltatas[];
    readonly slug: string;
    readonly arlista: ArListItem[];
};

export type AlSzolgaltatas = {
    readonly title: string;
    readonly thumbnail: string;
    readonly desc: string;
    readonly slug: string;
    readonly arlista: ArListItem[];
};

export type ArListItem = {
    readonly specSzolg: string;
    readonly ar: string;
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
    readonly type: MunkaType;
    readonly gallery: GalleryItem[];
    readonly before_gallery: GalleryItem[];
};

export enum MunkaType {
    Airbnb = 'Airbnb',
    Felujitas = 'Felújítás',
    Lakberendezes = 'Lakberendezés'
}

export type Adataim = {
    readonly telefon: string;
    readonly email: string;
    readonly facebook: string;
    readonly shortDesc: string;
    readonly munkadijSzorzo: string;
    readonly rolam: string;
};