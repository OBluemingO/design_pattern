"use strict";
class CarGlobal {
}
class EvCarGlobal extends CarGlobal {
    constructor() {
        super(...arguments);
        this.name = 'BYD';
        this.door = 4;
        this.wheel = 4;
        this.engine = 'auto';
        this.window = 4;
    }
    Name(value) {
        this.name = value;
        return this;
    }
    Door(value) {
        if (!value)
            return this;
        this.door = value;
        return this;
    }
    Window(value) {
        if (!value)
            return this;
        this.window = value;
        return this;
    }
    Engine(value) {
        if (!value)
            return this;
        this.engine = value;
        return this;
    }
    Wheel(value) {
        if (!value)
            return this;
        this.wheel = value;
        return this;
    }
    Create() {
        return {
            name: this.name,
            wheel: this.wheel,
            engine: this.engine,
            window: this.window,
            door: this.door,
        };
    }
}
const Tesla = new EvCarGlobal();
Tesla
    .Door(4)
    .Name('tesla')
    .Wheel(4);
console.log(Tesla.Create());
