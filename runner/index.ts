import { Client } from '../index'
import * as t from '../types'

let c = new Client("abc", "xyz")

c.getObjectives()
.then(objectives => {
    return Promise.all(objectives.map(o => {
        let i: t.Indicator = {
            metadata: o.metadata,
            spec: {
                from: new Date(),
                to: new Date(),
                percent: 1,
            }
        }

        return c.putIndicator(i)
    }))
})