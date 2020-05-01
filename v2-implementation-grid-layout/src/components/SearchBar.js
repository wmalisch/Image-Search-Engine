import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={term:''}
    }
    onFormSubmit(event){  // Use this is you get the undefined state type error
        event.preventDefault(); // prevent form/browser from submiting the form automatically and refreshing the page
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={(event) => this.onFormSubmit(event)} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                            type='text'
                            placeholder='Enter desired image...'
                            value={this.state.term} 
                            onChange={(e) => this.setState({term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar