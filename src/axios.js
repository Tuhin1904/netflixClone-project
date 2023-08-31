import axios from "axios";

// baseURL used to make requests to the movie database

const req= axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

// req.get('/foo-bar');
// means get req is made from https://api.themoviedb.org/3/foo-bar

export default req;