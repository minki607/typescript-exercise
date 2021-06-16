interface TV {
    turnOn(): boolean;
    turnOff(): void;
}

const myTV: TV = {
    turnOn() {
      return true;
    },
    turnOff() {
      
    }
}

function tryTurnOn(tv: TV) {
    tv.turnOn();
}

tryTurnOn(myTV);