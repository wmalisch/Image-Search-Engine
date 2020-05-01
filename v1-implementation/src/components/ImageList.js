import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image)=>{
        return <img alt={image.description} key={image.id} src={image.urls.regular} />  // key should only be applied to root element of this record
    })
    // const images = props.images.map(({ discription, id, urls})=>{
    //     return <img alt={description} key={id} src={urls.regular} />  
    // })
    console.log(props.images)
    return <div>{images}</div>
}

export default ImageList;
