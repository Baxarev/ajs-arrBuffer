export class Mathh {
  constructor() {
    this._stoned = false;
    this.cell = null;
  }
  
  get stoned () {
    return this._stoned;
  }

  set stoned(value) {
    switch (value) {
      case 'on':
      this._stoned = true;
      break;
      case 'of':
      this._stoned = false;
      break;
    }
  }

  get attack() {
    if (this.cell > 1) {
      this._attack -= this._attack * +`0.${cell - 1}`;
    }
    if (this.stoned) {
      this._attack -= Math.log2(cell) * 5;
      console.log(this._attack)
    }
    return this._attack;
  }

  set attack(cell) {
    this.cell = cell
  }
}