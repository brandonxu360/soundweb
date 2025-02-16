import type { FC } from 'react'
import './SidePanel.css'

interface SidePanelProps {
  isLoading: boolean
  error: string | null
  onRefresh: () => void
}

const SidePanel: FC<SidePanelProps> = ({ isLoading, error, onRefresh }) => {
  return (
    <div className="container">
      <h3 className="title">Graph Controls</h3>
      
      <button
        onClick={onRefresh}
        disabled={isLoading}
        className="button"
      >
        {isLoading ? 'Loading...' : 'Generate New Graph'}
      </button>

      {error && (
        <div className="error">
          {error}
        </div>
      )}
    </div>
  )
}

export default SidePanel