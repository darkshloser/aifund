import { useEffect, useState } from 'react'
import type { Asset } from "@/types/assets";
import type { StockInfo } from "@/types/stocks";


async function fetchStockInfo(symbol: string): Promise<StockInfo> {
  try {
    const response = await fetch(`/api/stock-info?symbol=${symbol}`);
    if (!response.ok) {
      throw new Error('Failed to fetch stock info');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching stock info:', error);
    return {
      companyName: 'N/A',
      marketCap: 'N/A',
      enterpriseValue: 'N/A',
      trailingPE: 'N/A',
      forwardPE: 'N/A',
      profitMargin: 'N/A',
      returnOnAssets: 'N/A',
      returnOnEquity: 'N/A',
      revenue: 'N/A',
    };
  }
}

export function StockInfo({ selectedAsset }: { selectedAsset: Asset | null }) {
  const [stockInfo, setStockInfo] = useState<StockInfo | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedAsset) {
      setLoading(true)
      fetchStockInfo(selectedAsset.symbol)
        .then(setStockInfo)
        .finally(() => setLoading(false))
    }
  }, [selectedAsset])

  if (!selectedAsset) {
    return null
  }

  return (
    <div className="bg-[#1e1f23] border-t border-gray-800 p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-semibold text-white mb-2">Valuation</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">Market Cap</p>
                <p className="text-white">{stockInfo?.marketCap}</p>
              </div>
              <div>
                <p className="text-gray-400">Enterprise Value</p>
                <p className="text-white">{stockInfo?.enterpriseValue}</p>
              </div>
              <div>
                <p className="text-gray-400">Trailing P/E</p>
                <p className="text-white">{stockInfo?.trailingPE}</p>
              </div>
              <div>
                <p className="text-gray-400">Forward P/E</p>
                <p className="text-white">{stockInfo?.forwardPE}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-md font-semibold text-white mb-2">Financial</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">Profit Margin</p>
                <p className="text-white">{stockInfo?.profitMargin}</p>
              </div>
              <div>
                <p className="text-gray-400">Return on Assets (ttm)</p>
                <p className="text-white">{stockInfo?.returnOnAssets}</p>
              </div>
              <div>
                <p className="text-gray-400">Return on Equity (ttm)</p>
                <p className="text-white">{stockInfo?.returnOnEquity}</p>
              </div>
              <div>
                <p className="text-gray-400">Revenue (ttm)</p>
                <p className="text-white">{stockInfo?.revenue}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
