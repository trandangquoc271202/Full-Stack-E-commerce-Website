import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';

const props = {width: 400, height: 250, zoomWidth: 500, img: "images/product1.png"};
const TestImage = () => {
    return (<ReactImageZoom {...props} />);
}
export default TestImage;