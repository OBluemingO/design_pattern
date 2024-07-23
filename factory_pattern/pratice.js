"use strict";
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
        return new DogBehavior();
    }
}
class Chicken extends Animals {
    funcFactory() {
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
