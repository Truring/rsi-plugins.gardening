"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@rsi/core");
class Sprinklers extends core_1.Resource {
    constructor(service) {
        super(service);
        this.service = service;
        this.sprinklers = [];
    }
    get elementSubscribable() {
        return true;
    }
    getElement(elementId) {
        return __awaiter(this, void 0, void 0, function* () {
            // find the element requested by the client
            // tslint:disable-next-line:max-line-length
            const data = this.sprinklers.find((element) => {
                return element.getValue().data.id === elementId;
            });
            return {
                data,
                status: "ok"
            };
        });
    }
    getResource(offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            // retriev all element
            let data;
            if ((typeof offset === "number" && typeof limit === "number")
                || (typeof limit === "number" && !offset)
                || (typeof offset === "number" && !limit) || (!offset && !limit)) {
                data = this.sprinklers.slice(offset, limit);
            }
            return { data, status: "ok" };
        });
    }
}
exports.Sprinklers = Sprinklers;
//# sourceMappingURL=sprinklers.js.map