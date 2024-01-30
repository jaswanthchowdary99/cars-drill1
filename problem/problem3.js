function problem3(inventory)
{
    const carModel =[];
    for(let i = 0; i < inventory.length; i++)
    {
        carModel.push(inventory[i].car_model);
    }

    for(let i = 0; i < carModel.length ; i++)
    {
        for(let j = 0; j < carModel.length- 1 ; j++)
        {
            if(carModel[j].toLowerCase() > carModel[j + 1].toLowerCase())
            {
                const temp = carModel[j];
                carModel[j] = carModel[j + 1];
                carModel[j + 1] = temp;
            }
        }
    }
    return carModel;

}
module.exports = problem3;