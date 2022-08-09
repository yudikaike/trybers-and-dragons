import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _fighter1: Character | Fighter, 
    private _fighter2: Character | Fighter,
  ) {
    super(_fighter1);
  }

  fight(): number {
    this._fighter1.attack(this._fighter2);
    this._fighter2.attack(this._fighter1);

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
