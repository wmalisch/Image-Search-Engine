import React from 'react';
import unsplash from '../api/unsplash.js'
import SearchBar from './SearchBar.js';
import ImageList from './ImageList.js';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state={ images: [] }
    }
    

    onSearchSubmit= async (term) =>{
        const response = await unsplash.get('/search/photos',{
            params: { query: term },
        });
        this.setState({ images: response.data.results })
    }

    render(){
        return(
            <div className='ui center aligned container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App