function problem2(inventory)
{
    
    const lastCar = inventory[inventory.length-1];
    return ` Last car is ${lastCar.car_make} ${lastCar.car_model}`
}
module.exports = problem2;