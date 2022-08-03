import styles from '../Forms/Form.module.css';
import { useState } from 'react';

export default function UploadImage({ data, handleInputChange }) {
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDragOver = () => {
    setIsDraggedOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggedOver(false);
  };

  return (
    <label className={styles.spanFull}>
      Front of House Image:
      <div
        className={
          isDraggedOver ? `${styles.uploadImage} ${styles.dropzone}` : `${styles.uploadImage}`
        }
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDragLeave}
      >
        <input
          className={styles.imageInput}
          type='file'
          accept='image/*'
          name='image'
          onChange={handleInputChange}
        />
        <img className={styles.previewImage} src={data.image} alt='' />
      </div>
    </label>
  );
}
