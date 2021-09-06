import {Metadata} from './common'

export interface Indicator {
    metadata: Metadata
    spec: {
        from: Date,
        to: Date,
        percent: number
    }
}