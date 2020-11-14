import type Evidence from "./Evidence"
import type EvidenceCollection from "./EvidenceCollection"
import type GhostType from "./GhostType"

export default class Ghost implements GhostType {
    name: String
    description: String
    strength: String
    weakness: String
    evidence: Evidence[]

    constructor(props: GhostType) {
        const { name, description, strength, weakness, evidence } = props
        this.name = name
        this.description = description
        this.strength = strength
        this.weakness = weakness
        this.evidence = evidence
    }

    isEligible(confirmed: EvidenceCollection, eliminated: EvidenceCollection): boolean {
        const hasRejectedEvidence = this.evidence.some((evidence) => {
            return eliminated.has(evidence)
        })
        const hasAllConfirmedEvidence = confirmed.isSubsetOf(this.evidence)
        return !hasRejectedEvidence && hasAllConfirmedEvidence
    }


}

