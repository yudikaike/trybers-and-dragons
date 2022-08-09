import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _instances = 0;

  constructor(name: string, private _energyType: EnergyType = 'mana') { 
    super(name);
    Necromancer._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
