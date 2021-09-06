import { Metadata, Labels } from './common'

export interface Objective {
    metadata: Metadata
    spec: {
        indicatorSelector: Labels,
        window: string,
        objectivePercent: number
    }
}