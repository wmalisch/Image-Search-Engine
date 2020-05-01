import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard.js';

const ImageList = (props) => {
    const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
    })
    // const images = props.images.map(({ discription, id, urls})=>{
    //     return <img alt={description} key={id} src={urls.regular} />  
    // })
    return <div className='image-list'>{images}</div>
}

export default ImageList;