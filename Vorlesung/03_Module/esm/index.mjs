import {Counter} from './counter.mjs'
import DefaultExportCounter from './counter.mjs'

const counter = new Counter()
console.log(counter.count())
console.log(counter.count())
console.log(counter.count())
console.log(counter.count())
console.log(counter.count())

const defaultCounter = new DefaultExportCounter()
console.log(defaultCounter.count())
console.log(defaultCounter.count())
console.log(defaultCounter.count())
console.log(defaultCounter.count())
console.log(defaultCounter.count())
