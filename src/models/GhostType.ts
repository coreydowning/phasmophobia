import type Evidence from './Evidence'
import type EvidenceCollection from './EvidenceCollection'

interface GhostType {
    readonly name: String,
    readonly description: String,
    readonly strength: String,
    readonly weakness: String,
    readonly evidence: Evidence[]
}

export default GhostType