declare type Labels = {
    [key: string]: string;
};
interface Metadata {
    labels: Labels;
    relatedTo: Labels[];
}

interface EntityContext {
    metadata: Metadata;
}

interface Indicator {
    metadata: Metadata;
    spec: {
        from: Date;
        to: Date;
        percent: number;
    };
}

interface Objective {
    metadata: Metadata;
    spec: {
        indicatorSelector: Labels;
        window: string;
        objectivePercent: number;
    };
}

declare class Client {
    private apiHost;
    private token;
    private org;
    constructor(org: string, token: string, apiHost?: string);
    getObjectives(): Promise<Objective[]>;
    putIndicator(indicator: Indicator): Promise<void>;
    putEntityContext(e: EntityContext): Promise<void>;
}

export { Client };
