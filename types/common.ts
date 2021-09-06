export type Labels = { [key: string]: string }

export interface Metadata {
    labels: Labels
    relatedTo: Labels[]
}