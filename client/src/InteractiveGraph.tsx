import type React from "react"
import { useCallback, useMemo } from "react"
import ForceGraph3D from 'react-force-graph-3d'
import SpriteText from "three-spritetext"
import * as THREE from 'three'

interface Node {
  id: number
  track_name: string
  group: number
}

interface Edge {
  source: number
  target: number
  weight: number
}

interface GraphData {
  nodes: Node[]
  edges: Edge[]
}

const generateColors = (numGroups: number): string[] => {
  const hueStep = 360 / numGroups
  return Array.from({ length: numGroups }, (_, i) => {
    const hue = i * hueStep
    return `hsl(${hue}, 70%, 50%)`
  })
}

const InteractiveGraph: React.FC<{ data: GraphData }> = ({ data }) => {
  const colors = useMemo(() => {
    const uniqueGroups = new Set(data.nodes.map(node => node.group))
    return generateColors(uniqueGroups.size)
  }, [data.nodes])

  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(3), [])

  const graphData = useMemo(() => {
    return {
      nodes: data.nodes,
      links: data.edges.map((edge) => ({
        ...edge,
        value: edge.weight,
      })),
    }
  }, [data])

  const getNodeColor = useCallback((node: Node) => {
    return colors[node.group % colors.length]
  }, [colors])

  const nodeThreeObject = useCallback((node: Node) => {
    const group = new THREE.Group()

    // Create sphere
    const sphere = new THREE.Mesh(
      sphereGeometry,
      new THREE.MeshLambertMaterial({ color: getNodeColor(node) })
    )
    group.add(sphere)

    // Create label with transparent background
    const label = new SpriteText(node.track_name)
    label.color = getNodeColor(node)
    label.textHeight = 4
    label.backgroundColor = 'transparent'
    label.padding = 2
    label.position.set(0, 8, 0)
    group.add(label)

    return group
  }, [sphereGeometry, getNodeColor])

  const handleNodeClick = useCallback((node: Node) => {
    console.log("Clicked node:", node)
    window.alert(`Clicked on track: ${node.track_name}`)
  }, [])

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ForceGraph3D
        graphData={graphData}
        nodeThreeObject={nodeThreeObject}
        nodeColor={getNodeColor}
        nodeRelSize={4}
        linkWidth={0.5}
        linkOpacity={0.5}
        linkDirectionalParticles={1}
        linkDirectionalParticleWidth={2}
        onNodeClick={handleNodeClick}
      />
    </div>
  )
}

export default InteractiveGraph

