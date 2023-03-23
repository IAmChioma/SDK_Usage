const _apiKey = process.env.API_KEY;
const STATUS_OK = parseInt(process.env.STATUS_OK);

const {MoviesSDK} = require('liblab-js-sdk');

const _apiUrl = process.env.BASE_URL;


const movieSDK = new MoviesSDK(_apiUrl, _apiKey);


 

const getAllMovies = async function(req,res){
movieSDK.getMovies().then((movies) => {
        return res.status(STATUS_OK).json(movies);
      })
      .catch((error) => {
        
        return res.status(error.response.status).json(error.response.statusText);
      });
    }

    
  


const getMovieById = async function(req,res){
  const id = req.params.id;
  movieSDK.getMovieById(id).then((movies) => {

          return res.status(STATUS_OK).json(movies);
        })
        .catch((error) => {
          
          return res.status(error.response.status).json(error.response.statusText);
        });
      }
const getAllQuoteInAMovie = async function(req,res){
  const id = req.params.id;
  const limit = req.query.limit? req.query.limit:10;
  const offset = req.query.offset?req.query.offset:2;
  const page = req.query.page?req.query.page:1;

  movieSDK.getAMovieQuote(id,limit,page,offset).then((movies) => {

          return res.status(STATUS_OK).json(movies);
        })
        .catch((error) => {
          
          return res.status(error.response.status).json(error.response.statusText);
        });
      }



module.exports ={
    getAllMovies,
    getMovieById,
    getAllQuoteInAMovie
}