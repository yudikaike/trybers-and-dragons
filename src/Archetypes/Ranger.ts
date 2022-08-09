import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _instances = 0;

  constructor(name: string, private _energyType: EnergyType = 'stamina') { 
    super(name);
    Ranger._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
