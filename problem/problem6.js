function problem6(inventory)
{
    const BMWAndAudi = [];
    for(let i = 0; i < inventory.length; i++)
    {
        if(inventory[i].car_make == "Audi" || inventory[i].car_make == "BMW")
        {
            let BMWAndAudicars = inventory[i];
            BMWAndAudi.push(BMWAndAudicars);
        }
    }
    return BMWAndAudi;
}
module.exports = problem6;