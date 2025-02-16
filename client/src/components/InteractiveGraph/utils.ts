import * as THREE from 'three'

export interface Node {
  id: number
  track_id: string
  group: number
}

export interface Edge {
  source: number
  target: number
  weight: number
}

export interface GraphData {
  nodes: Node[]
  edges: Edge[]
}

export const generateColors = (numGroups: number): string[] => {
  const hueStep = 360 / numGroups
  return Array.from({ length: numGroups }, (_, i) => {
    const hue = i * hueStep
    return `hsl(${hue}, 70%, 50%)`
  })
}

export const createGlowSprite = (color: string): THREE.Sprite => {
  const spriteMaterial = new THREE.SpriteMaterial({
    map: new THREE.TextureLoader().load(
      (() => {
        const canvas = document.createElement('canvas')
        canvas.width = 64
        canvas.height = 64
        const ctx = canvas.getContext('2d')!
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
        gradient.addColorStop(0, color)
        gradient.addColorStop(0.5, color.replace(')', ', 0.5)'))
        gradient.addColorStop(1, color.replace(')', ', 0)'))
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 64, 64)
        return canvas.toDataURL()
      })()
    ),
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  return new THREE.Sprite(spriteMaterial)
}