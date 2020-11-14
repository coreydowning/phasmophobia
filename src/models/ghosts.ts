import Evidence from "./Evidence"
import Ghost from "./Ghost"

const ghosts: Ghost[] = [
    new Ghost({
        name: "Spirit",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.SpiritBox,
            Evidence.Fingerprints,
            Evidence.GhostWriting,
        ],
    }),
    new Ghost({
        name: "Wraith",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.SpiritBox,
            Evidence.Fingerprints,
            Evidence.Freezing,
        ],
    }),
    new Ghost({
        name: "Phantom",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.Freezing,
            Evidence.EMF5,
            Evidence.GhostOrbs,
        ],
    }),
    new Ghost({
        name: "Poltergeist",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.SpiritBox,
            Evidence.Fingerprints,
            Evidence.GhostOrbs,
        ],
    }),
    new Ghost({
        name: "Banshee",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.Fingerprints,
            Evidence.EMF5,
            Evidence.Freezing,
        ],
    }),
    new Ghost({
        name: "Jinn",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.EMF5,
            Evidence.SpiritBox,
            Evidence.GhostOrbs,
        ],
    }),
    new Ghost({
        name: "Mare",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostOrbs,
            Evidence.SpiritBox,
            Evidence.Freezing,
        ],
    }),
    new Ghost({
        name: "Revenant",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.Fingerprints,
            Evidence.GhostWriting,
            Evidence.EMF5,
        ],
    }),
    new Ghost({
        name: "Shade",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostWriting,
            Evidence.EMF5,
            Evidence.GhostOrbs,
        ],
    }),
    new Ghost({
        name: "Demon",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.SpiritBox,
            Evidence.GhostWriting,
            Evidence.Freezing,
        ],
    }),
    new Ghost({
        name: "Yurei",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.GhostWriting,
            Evidence.Freezing,
            Evidence.GhostOrbs,
        ],
    }),
    new Ghost({
        name: "Oni",
        description: "",
        strength: "",
        weakness: "",
        evidence: [
            Evidence.SpiritBox,
            Evidence.GhostWriting,
            Evidence.EMF5,
        ],
    }),
]

export default ghosts