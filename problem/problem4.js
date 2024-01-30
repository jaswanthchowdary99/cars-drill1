function problem4(inventory)
{
  const carYear = [];
  for(let i = 0; i < inventory.length; i++)
  {
    carYear.push(inventory[i].car_year)
  }
  return carYear;
}
module.exports = problem4;