// suggest

interface Normal {
  Eat(): string
}

abstract class Animals {
  public abstract funcFactory(): Normal;

  public log() {
    try {
      return {
        success: true,
        data: this.funcFactory().Eat(),
        message: null,
      };
    } catch(err: any) {
      return {
        success: false,
        data: null,
        message: err instanceof Error ? err.message : err,
      };
    }
  }
}

class Dog extends Animals {
  public funcFactory() {
    // reason why invoke another class is for add interface into every call of Behavior
    return new DogBehavior()
  }
}

class Chicken extends Animals {
  public funcFactory() {
    // reason why invoke another class is for add interface into every call of Behavior
    return new ChickenBehavior();
  }
}

class DogBehavior implements Normal {
  public Eat(): string {
    return 'Raw Meat + Bone + Rice'
  }
}

class ChickenBehavior implements Normal {
  public Eat(): string {
    return 'Raw Meat + Fish'
  }
}

function someLogic(factory: Animals){
  return factory.log()
}

console.log(someLogic(new Dog()));




