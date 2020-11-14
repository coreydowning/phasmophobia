import type Evidence from './Evidence'

class EvidenceCollection extends Set<Evidence> {
    remove(evidence: Evidence): EvidenceCollection {
        this.delete(evidence)
        return this
    }

    toggle(evidence: Evidence): EvidenceCollection {
        if (this.has(evidence)) {
            return this.remove(evidence)
        } else {
            return this.add(evidence)
        }
    }

    reset(): EvidenceCollection {
        this.clear()
        return this
    }

    isSubsetOf(evidence: Evidence[]): boolean {
        for (let m of this) {
            if (!evidence.includes(m)) {
                return false
            }
        }
        return true
    }
}

export default EvidenceCollection