import styles from '../Forms/Form.module.css';
import { useResizeImage } from '../../hooks/useResizeImage';
import UploadImage from './UploadImage';
import CopyText from '../CopyText/CopyText';

export default function CoverForm({ data, setData, showPDF, setShowPDF }) {
  const { resizeFile } = useResizeImage();

  const handleInputChange = async (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.name === 'image') {
      try {
        const file = e.target.files[0];
        const image = await resizeFile(file);
        setData({ ...data, [name]: image });
      } catch (err) {
        console.log(err);
      }
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPDF(true);
  };

  const formInputs = [
    {
      class: '',
      label: 'Date of Inspection',
      type: 'date',
      name: 'inspectionDate',
      handler: handleInputChange,
    },
    {
      class: '',
      label: 'Date of Receipt',
      type: 'date',
      name: 'receiptDate',
      handler: handleInputChange,
    },
    {
      class: '',
      label: 'Fee',
      type: 'tel',
      name: 'fee',
      value: data.fee || '',
      handler: handleInputChange,
    },
    {
      class: 'spanFull',
      label: 'Property Address',
      type: 'text',
      name: 'address',
      value: data.address || '',
      handler: handleInputChange,
    },
    {
      label: 'City',
      type: 'text',
      name: 'city',
      value: data.city || '',
      handler: handleInputChange,
    },
    {
      label: 'State',
      type: 'text',
      name: 'state',
      value: data.state || '',
      handler: handleInputChange,
    },
    {
      label: 'Zip',
      type: 'text',
      name: 'zip',
      value: data.zip || '',
      handler: handleInputChange,
    },
    {
      label: 'Client Name',
      type: 'text',
      name: 'name',
      value: data.name || '',
      handler: handleInputChange,
    },
    {
      label: 'Client Email',
      type: 'text',
      name: 'email',
      value: data.email || '',
      handler: handleInputChange,
    },
  ];

  return (
    <section className={styles.formContainer}>
      <h1>Inspection Info</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        {formInputs.map((input) => (
          <label key={input.name} className={styles[input.class]}>
            {input.label}
            <input
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={input.handler}
            />
          </label>
        ))}
        <UploadImage data={data} handleInputChange={handleInputChange} />
        <button className={styles.spanFull} type='submit'>
          Create Cover/Receipt
        </button>
        {showPDF && <CopyText data={data} />}
      </form>
    </section>
  );
}
