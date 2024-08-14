// suggest
// ง่ายๆก็คือการมองหา property ของสิ่งที่เหมือนกันและแยกออกมาให้เป็น parent class

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

// refactor

interface IEnging {
  gear: 'manual' | 'auto'
  year: '2020' | '2024'
  wheel: '4' | '6'
  detail(): string
}

abstract class Car {
  public value: string
  constructor(){
    this.value = ''
  }

  abstract factoryTest(): void

  print() {
    console.log(`each same factory ${this.value}`)
  }
}

class EvCar extends Car {
  factoryTest(): void {
    const output = new EvCarDetail()
    this.value = output.detail()
  }
}

class EvCarDetail implements IEnging {
  public wheel: IEnging["wheel"];
  public  year: IEnging["year"];
  public gear: IEnging["gear"];

  constructor() {
    this.wheel = "4";
    this.year = "2020";
    this.gear = "auto";
  }

  detail(): string {
    return `BYD ${this.gear} ${this.wheel} ${this.year}`
  }
}

const result = new EvCar()
result.print()

