"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _Singleton_instance_singleton;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exce = void 0;
/**
 * The Singleton class defines an `instance` getter, that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    constructor() { }
    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    static get instance() {
        if (!__classPrivateFieldGet(_a, _a, "f", _Singleton_instance_singleton)) {
            __classPrivateFieldSet(_a, _a, new _a(), "f", _Singleton_instance_singleton);
        }
        return __classPrivateFieldGet(_a, _a, "f", _Singleton_instance_singleton);
    }
    /**
     * Finally, any singleton can define some business logic, which can be
     * executed on its instance.
     */
    someBusinessLogic() {
        // ...
    }
}
_a = Singleton;
// # private
_Singleton_instance_singleton = { value: void 0 };
/**
 * The client code.
 */
function Exce() {
    const s1 = Singleton.instance;
    const s2 = Singleton.instance;
    console.log('first');
    if (s1 === s2) {
        console.log("Singleton works, both variables contain the same instance.");
    }
    else {
        console.log("Singleton failed, variables contain different instances.");
    }
}
exports.Exce = Exce;
