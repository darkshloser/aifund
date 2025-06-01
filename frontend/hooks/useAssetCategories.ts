import { useMemo } from "react";
import { AssetCategoryMap } from "@/types/assets";

export function useAssetCategories(): AssetCategoryMap {
    return useMemo(
        () => ({
            Stocks: [
                {
                    name: "Apple",
                    symbol: "NASDAQ:AAPL",
                    price: 145.84,
                    change: 3.65,
                    changePercent: 2.57,
                    logo: "/placeholder.svg",
                },
                {
                    name: "Nvidia",
                    symbol: "NASDAQ:NVDA",
                    price: 395.99,
                    change: -77.44,
                    changePercent: -16.36,
                    logo: "/placeholder.svg",
                },
                // ...
            ],
            Indexes: [
                {
                    name: "S&P 500",
                    symbol: "SP:SPX",
                    price: 4783.45,
                    change: 25.32,
                    changePercent: 0.53,
                    logo: "/placeholder.svg",
                },
                // ...
            ],
            Crypto: [
                {
                    name: "Bitcoin",
                    symbol: "CRYPTO:BTCUSD",
                    price: 42385.23,
                    change: 1250.45,
                    changePercent: 3.04,
                    logo: "/placeholder.svg",
                },
                // ...
            ],
            Forex: [
                {
                    name: "EUR/USD",
                    symbol: "FX:EURUSD",
                    price: 1.0923,
                    change: 0.0025,
                    changePercent: 0.23,
                    logo: "/placeholder.svg",
                },
                // ...
            ],
        }),
        []
    );
}
