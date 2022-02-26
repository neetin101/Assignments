import React from 'react';

const ImageList = props => {
    return props.images.map( image => (<img key={image.id} src={image.urls.regular} alt={image.alt_description} />) );
};

export default ImageList;