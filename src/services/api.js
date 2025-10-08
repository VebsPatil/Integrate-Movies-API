const BASE_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=2118255c";

export const renderpopular = async () => {
  const response = await fetch(`${BASE_URL}`);
  const ans = await response.json();
  console.log(ans);
  return ans;
};

export const rendersearch = async (query) => {
  const response = await fetch(`${BASE_URL}&s=${encodeURIComponent(query)}`);
  const data = await response.json();
  console.log("API FETCHING........");

  console.log(data.Search);
  return data.Search;
};
