export class Mathh {
  constructor() {
    this._stoned = false;
  }
  
  get stoned () {
    return this._stoned;
  }

  set stoned(value) {
    if (value === 'on') this._stoned = true;
    if (value === 'of') this._stoned = false;
  }

  get attack() {
    return this._attack;
  }

  set attack(cell) {
    if (cell > 1) {
      this._attack -= this._attack * +`0.${cell - 1}`;
    }
    if (this.stoned) {
      this._attack -= Math.log2(cell) * 5;
      console.log(this._attack)
    }
  }
}