const express = require('express');
const movieController = require('../controllers/movie.controller');
const router = express.Router();


     
router.route('')
            .get(movieController.getAllMovies)

router.route('/:id')
            .get(movieController.getMovieById)
              
router.route('/:id/quote')
            .get(movieController.getAllQuoteInAMovie)  
                  
module.exports = router;