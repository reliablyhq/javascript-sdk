var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(org, token, apiHost = 'api.reliably.com') {
        this.org = org;
        this.token = token;
        this.apiHost = apiHost;
    }
    getObjectives() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `https://${this.apiHost}/entities/${this.org}/reliably.com/v1/objective`;
            let req = new Request(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            let res = yield fetch(req);
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.statusText}`);
            }
            let body = yield res.json();
            return body.map((x) => ({
                metadata: x.metadata,
                spec: x.spec
            }));
        });
    }
    putIndicator(indicator) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `https://${this.apiHost}/entities/${this.org}/reliably.com/v1/indicator`;
            let req = new Request(url, {
                method: 'PUT',
                body: JSON.stringify(indicator),
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            let res = yield fetch(req);
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.statusText}`);
            }
        });
    }
    putEntityContext(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `https://${this.apiHost}/entities/${this.org}/reliably.com/v1/entitycontext`;
            let req = new Request(url, {
                method: 'PUT',
                body: JSON.stringify(e),
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
            let res = yield fetch(req);
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.statusText}`);
            }
        });
    }
}
exports.Client = Client;
