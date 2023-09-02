import Rows from "./Rows"
import requests from "./requests"
import './App.css'
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Rows title='Favourites' fetchURL={requests.fetchFavourite}
        isLargeRow={true}
      />
      <Rows title='Top Rated' fetchURL={requests.fetchTopRated}/>
      <Rows title='Upcoming Shows' fetchURL={requests.fetchUpcoming}/>
      <Rows title='Popular Series' fetchURL={requests.fetchSeries}/>
      <Rows title='Most Watched' fetchURL={requests.fetchMostWatched}/>
      <Rows title='Top Rated' fetchURL={requests.fetchTopRated}/>
      <Rows title='Top Rated' fetchURL={requests.fetchTopRated}/>
    <h3>Before end</h3>
    </div>
  );
}

export default App;
