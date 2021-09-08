import * as t from './types'

export class Client {
    private apiHost: string
    private token: string
    private org: string

    constructor(org: string, token: string, apiHost: string = 'api.reliably.com') {
        this.org = org
        this.token = token
        this.apiHost = apiHost
    }

    public async getObjectives(): Promise<t.Objective[]> {
        let url = `https://${this.apiHost}/entities/${this.org}/reliably.com/v1/objective`
        let req = new Request(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })

        let res = await fetch(req)

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.statusText}`)
        }

        let body: [] = await res.json()

        return body.map((x: any): t.Objective => ({
            metadata: x.metadata,
            spec: x.spec
        }))
    }

    public async putIndicator(indicator: t.Indicator) {
        let url = `https://${this.apiHost}/entities/${this.org}/reliably.com/v1/indicator`

        let req = new Request(url, {
            method: 'PUT',
            body: JSON.stringify(indicator),
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })

        let res = await fetch(req)

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.statusText}`)
        }
    }

    public async putEntityContext(e: t.EntityContext) {
        let url = `https://${this.apiHost}/entities/${this.org}/reliably.com/v1/entitycontext`
        
        let req = new Request(url, {
            method: 'PUT',
            body: JSON.stringify(e),
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })

        let res = await fetch(req)

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.statusText}`)
        }
    }
}