import type Evidence from './Evidence'

interface GhostType {
    name: String,
    description: String,
    strength: String,
    weakness: String,
    evidence: Evidence[]
}

export default GhostType