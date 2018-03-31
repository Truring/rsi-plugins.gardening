"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rsi/core");
const rxjs_1 = require("rxjs");
class Sprinklers extends core_1.Resource {
    constructor(service) {
        super(service);
        this.service = service;
        /**
         * build the actual media collection and add it to the collections
         */
        const newElemen = new rxjs_1.BehaviorSubject({
            data: {
                id: "3d6209d1-d720-4f1b-930a-b3ca5e7916d3",
                name: "backyard",
                state: "off",
                uri: "/" + this.service.name + "/" + this.name + "/3d6209d1-d720-4f1b-930a-b3ca5e7916d3"
            },
            lastUpdate: Date.now(),
            propertiesChanged: []
        });
        this.addElement(newElemen);
    }
    get elementSubscribable() {
        return true;
    }
}
exports.Sprinklers = Sprinklers;
//# sourceMappingURL=sprinklers.js.map