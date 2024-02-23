const key = "4bd31ad901af4a1686b124953232809";


const fetchData = async (query) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`;
  
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json()
  
  return data;
};

export default {
  fetchData,
};
