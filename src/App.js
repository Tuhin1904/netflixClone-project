import Rows from "./Rows"
import requests from "./requests"

function App() {
  return (
    <>
    <h1>tuhin</h1>
      <Rows title='Favourites' fetchURL={requests.fetchFavourite}/>
      <Rows title='Top Rated' fetchURL={requests.fetchTopRated}/>
    <h3>Before end</h3>
    </>
  );
}

export default App;