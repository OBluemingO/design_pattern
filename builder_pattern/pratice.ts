abstract class CarGlobal {
  public wheel: number | undefined
  public window: number | undefined
  public door: number | undefined
  public engine: 'auto' | 'manual' | undefined
  public name: string | undefined

  abstract Name(value: string): CarGlobal
  abstract Wheel(value?: number): CarGlobal
  abstract Window (value?: number): CarGlobal
  abstract Door(value?: number): CarGlobal
  abstract Engine(value?: any): CarGlobal
  abstract Create(): any
}

class EvCarGlobal extends CarGlobal {
  public name = 'BYD'
  public door = 4
  public wheel = 4
  public engine = 'auto' as any
  public window = 4

  Name(value: string): CarGlobal {
    this.name = value
    return this
  }

  Door(value?: number): CarGlobal {
    if (!value) return this;

    this.door = value
    return this;
  }

  Window(value?: number): CarGlobal {
    if(!value) return this

    this.window = value
    return this;
  }

  Engine(value: any): CarGlobal {
    if(!value) return this

    this.engine = value
    return this
  }

  Wheel(value?: number): CarGlobal {
    if(!value) return this

    this.wheel = value
    return this
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

const Tesla = new EvCarGlobal()

Tesla
  .Door(4)
  .Name('tesla')
  .Wheel(4)

console.log(Tesla.Create())

