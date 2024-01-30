function problem5(inventory,carYear)
{
  const oldcar = [];
  for(let i = 0; i < carYear.length; i++)
  {
    if(carYear[i] < 2000)
    {
        let allcar = carYear[i];
        oldcar.push(allcar)
    }
  }
  return oldcar;
}

module.exports=problem5;
