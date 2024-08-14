"use strict";
// suggest
// ง่ายๆก็คือการมองหา property ของสิ่งที่เหมือนกันและแยกออกมาให้เป็น parent class
class Animals {
    log() {
        try {
            return {
                success: true,
                data: this.funcFactory().Eat(),
                message: null,
            };
        }
        catch (err) {
            return {
                success: false,
                data: null,
                message: err instanceof Error ? err.message : err,
            };
        }
    }
}
class Dog extends Animals {
    funcFactory() {
        // reason why invoke another class is for add interface into every call of Behavior
        return new DogBehavior();
    }
}
class Chicken extends Animals {
    funcFactory() {
        // reason why invoke another class is for add interface into every call of Behavior
        return new ChickenBehavior();
    }
}
class DogBehavior {
    Eat() {
        return 'Raw Meat + Bone + Rice';
    }
}
class ChickenBehavior {
    Eat() {
        return 'Raw Meat + Fish';
    }
}
function someLogic(factory) {
    return factory.log();
}
console.log(someLogic(new Dog()));
class Car {
    constructor() {
        this.value = '';
    }
    print() {
        console.log(`each same factory ${this.value}`);
    }
}
class EvCar extends Car {
    factoryTest() {
        const output = new EvCarDetail();
        this.value = output.detail();
    }
}
class EvCarDetail {
    constructor() {
        this.wheel = "4";
        this.year = "2020";
        this.gear = "auto";
    }
    detail() {
        return `BYD ${this.gear} ${this.wheel} ${this.year}`;
    }
}
const result = new EvCar();
result.print();
