import Evidence from "./Evidence"
import type GhostType from "./GhostType"

const ghosts: GhostType[] = [
    {
        name: "Spirit",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.Fingerprints,
            Evidence.SpiritBox,
            Evidence.GhostWriting,
        ],
    },
    {
        name: "Wraith",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.Fingerprints,
            Evidence.SpiritBox,
            Evidence.Freezing,
        ],
    },
    {
        name: "Phantom",
        description: "",
        strength: "",
        weakness: "",
        evidence: [Evidence.GhostOrbs, Evidence.EMF5, Evidence.Freezing],
    },
    {
        name: "Poltergeist",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.Fingerprints,
            Evidence.SpiritBox,
            Evidence.GhostOrbs,
        ],
    },
    {
        name: "Banshee",
        description: "",
        strength: "",
        weakness: "",
        evidence: [Evidence.Fingerprints, Evidence.EMF5, Evidence.Freezing],
    },
    {
        name: "Jinn",
        description: "",
        strength: "",
        weakness: "",
        evidence: [Evidence.EMF5, Evidence.SpiritBox, Evidence.GhostOrbs],
    },
    {
        name: "Mare",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostOrbs,
            Evidence.SpiritBox,
            Evidence.Freezing,
        ],
    },
    {
        name: "Revenant",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.Fingerprints,
            Evidence.SpiritBox,
            Evidence.Freezing,
        ],
    },
    {
        name: "Shade",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostWriting,
            Evidence.EMF5,
            Evidence.GhostOrbs,
        ],
    },
    {
        name: "Demon",
        description: "spooky",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostWriting,
            Evidence.SpiritBox,
            Evidence.Freezing,
        ],
    },
    {
        name: "Yurei",
        description: "spooky",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostWriting,
            Evidence.Freezing,
            Evidence.GhostOrbs,
        ],
    },
    {
        name: "Oni",
        description: "spooky",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostWriting,
            Evidence.SpiritBox,
            Evidence.EMF5,
        ],
    },
]

export default ghosts