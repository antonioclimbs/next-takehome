import ReactImageZoom from 'react-image-zoom';

export default function ZoomableImage(src) {
  const zoomImage = {
    // Specify the URL of the image to be displayed and zoomed
    src,
    // Set the dimensions of the zoomed image
    zoomImage: 'src',
    // Set other optional properties, such as zoom level, zoom position, etc.
    // You can refer to the library's documentation for more options
    zoomLevel: 1,
    zoomPosition: 'original',
  };

  return (
    <div>
      <ReactImageZoom {...zoomImage} />
    </div>
  );
};