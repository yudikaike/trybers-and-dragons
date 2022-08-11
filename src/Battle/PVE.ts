import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _fighter: Character | Fighter, 
    private _monster: Monster[] | SimpleFighter[],
  ) {
    super(_fighter);
  }

  fight(): number {
    this._monster.forEach((monster) => {
      this._fighter.attack(monster);
      monster.attack(this._fighter);
    });

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;
