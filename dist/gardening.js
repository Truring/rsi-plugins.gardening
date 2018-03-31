"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rsi/core");
const sprinklers_1 = require("./sprinklers");
class Gardening extends core_1.Service {
    constructor() {
        super();
        this.id = "12a0a7a2-c165-41b5-8f78-499f906c3bdb"; // random id
        this.addResource(new sprinklers_1.Sprinklers(this));
    }
}
exports.Gardening = Gardening;
//# sourceMappingURL=gardening.js.map