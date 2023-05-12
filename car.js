let car1 = {
    name: 'Reno Stepway',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsesPower: 120,
        isTurnOn: false
    },
    start: function () {
        this.isTurnOn = true;
        this.speed = 10;
        this.engine.isTurnOn = true;
    }
};

/*
car1.engine.v = 23;
window.alert(car1.engine.v);*/

car1.start();
window.alert(car1.isTurnOn);
window.alert(car1.speed);