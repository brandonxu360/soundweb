import { useState, useCallback, useEffect, useMemo } from "react"
import type React from "react"
import ForceGraph3D from 'react-force-graph-3d'
import SpriteText from "three-spritetext"
import * as THREE from 'three'
import SidePanel from '../SidePanel/SidePanel'
import { Node, GraphData, generateColors, createGlowSprite } from './utils'
import './InteractiveGraph.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

const InteractiveGraph: React.FC = () => {
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

  useEffect(() => {
    fetchGraphData()
  }, [fetchGraphData])

  // Graph visualization logic
  const colors = useMemo(() => {
    if (!graphData) return []
    const uniqueGroups = new Set(graphData.nodes.map(node => node.group))
    return generateColors(uniqueGroups.size)
  }, [graphData])

  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(3), [])

  const processedGraphData = useMemo(() => {
    if (!graphData) return null
    return {
      nodes: graphData.nodes,
      links: graphData.edges.map((edge) => ({
        ...edge,
        value: edge.weight,
      })),
    }
  }, [graphData])

  const getNodeColor = useCallback((node: Node) => {
    return colors[node.group % colors.length]
  }, [colors])

  const nodeThreeObject = useCallback((node: Node) => {
    const group = new THREE.Group()

    const sphere = new THREE.Mesh(
      sphereGeometry,
      new THREE.MeshLambertMaterial({
        color: getNodeColor(node),
        transparent: true,
      })
    )
    group.add(sphere)

    const glow = createGlowSprite(getNodeColor(node))
    glow.scale.set(20, 20, 1)
    group.add(glow)

    const label = new SpriteText(node.track_id)
    label.color = getNodeColor(node)
    label.textHeight = 4
    label.backgroundColor = 'transparent'
    label.padding = 2
    label.position.set(0, 8, 0)
    group.add(label)

    return group
  }, [sphereGeometry, getNodeColor])

  const handleNodeClick = useCallback((node: Node) => {
    window.alert(`Clicked on track: ${node.track_id}`)
  }, [])

  return (
    <div className="graph-container">
      <SidePanel
        isLoading={isLoading}
        error={error}
        onRefresh={fetchGraphData}
      />

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-overlay-content">
            <div className="loading-spinner" />
          Loading graph...
          </div>
        </div>
      )}

      {processedGraphData && (
        <ForceGraph3D
          graphData={processedGraphData}
          nodeThreeObject={nodeThreeObject}
          nodeColor={getNodeColor}
          nodeRelSize={4}
          linkWidth={0.5}
          linkOpacity={0.5}
          linkDirectionalParticles={1}
          linkDirectionalParticleWidth={2}
          onNodeClick={handleNodeClick}
          height={window.innerHeight - 92}
        />
      )}
    </div>
  )
}

export default InteractiveGraph