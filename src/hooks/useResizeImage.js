import Resizer from 'react-image-file-resizer';

export function useResizeImage() {
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1100,
        825,
        'JPEG',
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64'
      );
    });

  return { resizeFile };
}
