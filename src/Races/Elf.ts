import Race from './Race';

class Dwarf extends Race {
  static _instances = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints = 99) { 
    super(name, dexterity);
    Dwarf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
