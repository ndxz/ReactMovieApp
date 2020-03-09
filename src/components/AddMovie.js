import React from 'react'

class AddMovie extends React.Component {


    state = {
        modalOpen: false,
        movieName: '',
        banner: '',
        Rating: 1

    }

    openModal = () => {

        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleNameChange = (e) => { this.setState({ movieName: e.target.value.trim() }) }

    handleBannerChange = (e) => { this.setState({ banner: e.target.value.trim() }) }

    handleRatingChange = (e) => { this.setState({ Rating: e.target.value }) }



    AddMovie = (e) => {
        e.preventDefault();
        this.props.movieData({
            name: this.state.movieName,
            img: this.state.banner,
            rating: this.state.Rating


        });
        this.setState({
            modalOpen: !this.state.modalOpen ,
            movieName:'',
            banner:'',
            rating:1
            
        })

    }

    render() {
        return (
            <>
                <form onSubmit={this.AddMovie} className={this.state.modalOpen ? 'modalForm' : 'modal-hidden'} >
                    <input type='button' value='X' onClick={this.openModal} />
                    <input type='text' value={this.state.movieName} placeholder="Movie's name" onChange={this.handleNameChange} />
                    <input type='text' value={this.state.banner} placeholder="banner" onChange={this.handleBannerChange} />
                    <input type='number' value={this.state.Rating} placeholder="Rating" onChange={this.handleRatingChange} />
                    <button type='submit' onSubmit={this.AddMovie} > add movie </button>
                </form>

                <input className='addMovieBtn' type='button' value='+' onClick={this.openModal} />
            </>
        )
    }
}

export default AddMovie
