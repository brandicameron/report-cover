import { useState } from 'react';
import Header from './components/Header';
import PlaceholderPhoto from '../src/images/placeholder.jpg';
import CoverForm from './components/Forms/CoverForm';
import CoverPDF from './components/CoverPDF';

export default function App() {
  const [showPDF, setShowPDF] = useState(false);
  const [data, setData] = useState({
    city: 'Nashville',
    state: 'Tennessee',
    image: PlaceholderPhoto,
  });

  return (
    <>
      <Header />
      <section className='flex'>
        <CoverForm data={data} setData={setData} showPDF={showPDF} setShowPDF={setShowPDF} />
        <CoverPDF data={data} showPDF={showPDF} />
      </section>
    </>
  );
}
