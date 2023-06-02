export const FetchMydata = (ct ) => async () => {
    
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ct}&units=imperial&appid=5a8215f577076017ce8c00cf0fa1d07a`
  );
  if(!response.ok){
    throw new Error('cant')
  }
  const data = response.json();
  return data;
};
