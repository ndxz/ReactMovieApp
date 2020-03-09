import React from 'react';
import AM from './AddMovie';

class NewMovies extends React.Component {

    state = {
        movies: [{ name: 'Inception', img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', rating: 5 },
        { name: 'The Shawshank Redemption', img: 'https://images-na.ssl-images-amazon.com/images/I/51zUbui%2BgbL.jpg', rating: 4 },
        { name: 'Interstellar', img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg', rating: 5 },
        { name: 'The Dark Knight', img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', rating: 4 },
        { name: 'The Big Lebowski', img: 'https://uvmbored.com/wp-content/uploads/2018/05/biglebowski-poster-3b44f87f597e68af6da589ba9fe83518.jpg', rating: 4 },
        { name: 'The Wolf Of Wall Street', img: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg', rating: 3 },
        { name: 'Avengers Infinity War', img: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg', rating: 2 }],
        input: '',
        star: 0
    }


    search = (e) => { e.preventDefault() }

    handleChange = (e) => {
        this.setState({input: e.target.value.trim()})
    }        

    totalRating = (e) => {
        this.setState({
            star: e.target.value})
    }
    defaultImg =(e)=>{e.target.src='https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-atmosphere-business-gray-background-ppth5-background-image_142920.jpg'}

    renderMovies = (movie) => {

        if (movie.name.toLowerCase().indexOf(this.state.input) === -1) {
            return null
        }

        return <div className='movie' key={this.state.movies.indexOf(movie)} > <h2> {movie.name} </h2> <img src={movie.img} onError={this.defaultImg} alt='movie' />

            <div className='movieRatings'>
                {[...Array(5)].map((star, i) =>
                    <label key={i + 1}>
                        <input type='radio' name='rating' value={i + 1} />
                        <span className='star' style={movie.rating >= i + 1 ? { color: 'gold' } : { color: 'silver' }} >&#9733;</span>
                    </label>
                )}
            </div>
        </div>
    }


    addNewMovie = (movieData) => {
        if (movieData.rating <1){alert('minimum Rating is 1')}
        else if (movieData.name==='' || movieData.banner==='') { alert('all Movie Data must be filled')}
        else {
        let newMovies = this.state.movies.concat(movieData);
        this.setState({
            movies: newMovies

        })}

    }



    render() {

        return (
            <>
            <h3>My Movies App </h3>
                <form className='searchBar' onSubmit={this.search}>
                    
                
                    <input type='text' value={this.state.input} className='search' onChange={this.handleChange} />


                    <div className='ratings'>
                        {[...Array(5)].map((star, i) =>
                            <label key={i + 1}>
                                <input type='radio' name='rating' value={i + 1} onClick={this.totalRating} />
                                <span className='star' style={this.state.star >= i + 1 ? { color: 'gold' } : { color: 'silver' }} >&#9733;</span>
                            </label>
                        )}
                    </div>
                </form>
                <div className='moviesContainer'>

                    {this.state.movies.filter(ratings => ratings.rating >= this.state.star).map(movie => {
                        return this.renderMovies(movie)
                    }
                    )}

                </div>
                <AM movieData={this.addNewMovie} />
            </>
        )
    }
}

export default NewMovies

