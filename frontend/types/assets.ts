export type Asset = {
    name: string;
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    logo: string;
};

export type AssetCategoryMap = {
    [category: string]: Asset[];
};
