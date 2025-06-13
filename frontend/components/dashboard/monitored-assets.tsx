"use client"

import { FiTrash2 } from "react-icons/fi"
import type { Asset } from "@/types/assets";

export function MonitoredAssets({
  assets,
  onRemoveAsset,
  onSelectAsset,
  selectedAsset,
}: {
  assets: Asset[]
  onRemoveAsset: (symbol: string) => void
  onSelectAsset: (asset: Asset) => void
  selectedAsset: Asset | null
}) {
  return (
    <div className="card card-dark">
      <div className="card-header">
        <h5 className="card-title mb-0 text-white">Monitored Assets</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-dark-custom">
            <thead>
              <tr>
                <th>Ticker</th>
                <th className="text-end">Current Price</th>
                <th className="text-end">1 Day Forecast</th>
                <th className="text-end">Change (%)</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr
                  key={asset.symbol}
                  className={`asset-row ${selectedAsset?.symbol === asset.symbol ? "selected" : ""}`}
                  onClick={() => onSelectAsset(asset)}
                  style={{ cursor: "pointer" }}
                >
                  <td>{asset.symbol}</td>
                  <td className="text-end">${asset.price.toFixed(2)}</td>
                  <td className="text-end">${(asset.price * (1 + asset.changePercent / 100)).toFixed(2)}</td>
                  <td className={`text-end ${asset.changePercent >= 0 ? "text-success" : "text-danger"}`}>
                    {asset.changePercent.toFixed(2)}%
                  </td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-ghost text-danger"
                      onClick={(e) => {
                        e.stopPropagation()
                        onRemoveAsset(asset.symbol)
                      }}
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
