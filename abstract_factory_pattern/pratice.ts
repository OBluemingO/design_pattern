interface IAbstractFactory {
  createThaiFactory(): any;
  createEnglishFactory(): any;
}

interface IForest {
  tree(): any;
  animal(): any;
  water(): any;
}

class forestFactory implements IAbstractFactory {
  createThaiFactory() {
    return new ThaiForest();
  }

  createEnglishFactory() {
    return new EnglishForest()
  }
}

class EnglishForest implements IForest {
  tree() {
    return "winter tree";
  }

  water() {
    return "not available";
  }

  animal() {
    return "fog + fox";
  }
}

class ThaiForest implements IForest {
  tree() {
    return "dry tree";
  }

  water() {
    return "water fall";
  }

  animal() {
    return "Monkey + Cow + snake";
  }
}

const factory = new forestFactory()
const engLishForest = factory.createEnglishFactory().animal() + factory.createEnglishFactory().tree() + factory.createEnglishFactory().water()

console.log(engLishForest)