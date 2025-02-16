import { useState, useCallback, useEffect } from "react"
import type React from "react"
import InteractiveGraph from "./InteractiveGraph"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

interface GraphData {
  nodes: Array<{
    id: number
    track_name: string
    group: number
  }>
  edges: Array<{
    source: number
    target: number
    weight: number
  }>
}

const App: React.FC = () => {
  const [graphData, setGraphData] = useState<GraphData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchGraphData = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_BASE_URL}/api/graph/random`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setGraphData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch graph data')
      console.error('Error fetching graph data:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Fetch initial data on component mount
  useEffect(() => {
    fetchGraphData()
  }, [fetchGraphData])

  return (
    <div>
      <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Interactive Track Graph</h1>
        <button 
          onClick={fetchGraphData}
          disabled={isLoading}
          style={{ 
            padding: '0.5rem 1rem',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Loading...' : 'Refresh Graph'}
        </button>
      </div>
      
      {error && (
        <div style={{ color: 'red', padding: '1rem' }}>
          Error: {error}
        </div>
      )}
      
      {graphData && <InteractiveGraph data={graphData} />}
    </div>
  )
}

export default App