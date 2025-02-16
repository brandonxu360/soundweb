import { createFileRoute } from '@tanstack/react-router'
import InteractiveGraph from '../components/InteractiveGraph/InteractiveGraph'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <InteractiveGraph />
  )
}