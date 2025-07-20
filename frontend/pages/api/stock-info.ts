import type { NextApiRequest, NextApiResponse } from "next";
import yahooFinance from "yahoo-finance2";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { symbol } = req.query;

    if (!symbol || typeof symbol !== "string") {
        return res.status(400).json({ error: "Symbol is required" });
    }

    try {
        const quote = await yahooFinance.quote(symbol);
        const financialData = await yahooFinance.quoteSummary(symbol, {
            modules: ["financialData", "defaultKeyStatistics"],
        });

        const formatNumber = (num: number | undefined, prefix: string = "") => {
            if (num === undefined) return "N/A";
            return (
                prefix +
                (num >= 1e9
                    ? `${(num / 1e9).toFixed(2)}B`
                    : num >= 1e6
                    ? `${(num / 1e6).toFixed(2)}M`
                    : num.toFixed(2))
            );
        };

        const formatPercentage = (num: number | undefined) => {
            if (num === undefined) return "N/A";
            return `${(num * 100).toFixed(2)}%`;
        };

        const stockInfo = {
            companyName: quote.longName || "N/A",
            marketCap: formatNumber(quote.marketCap, "$"),
            enterpriseValue: formatNumber(
                financialData.defaultKeyStatistics?.enterpriseValue,
                "$"
            ),
            trailingPE:
                financialData.defaultKeyStatistics?.trailingPE?.toFixed(2) ||
                "N/A",
            forwardPE:
                financialData.defaultKeyStatistics?.forwardPE?.toFixed(2) ||
                "N/A",
            profitMargin: formatPercentage(
                financialData.financialData?.profitMargins
            ),
            returnOnAssets: formatPercentage(
                financialData.financialData?.returnOnAssets
            ),
            returnOnEquity: formatPercentage(
                financialData.financialData?.returnOnEquity
            ),
            revenue: formatNumber(
                financialData.financialData?.totalRevenue,
                "$"
            ),
        };

        res.status(200).json(stockInfo);
    } catch (error) {
        console.error("Error fetching stock info:", error);
        res.status(500).json({ error: "Failed to fetch stock info" });
    }
}
