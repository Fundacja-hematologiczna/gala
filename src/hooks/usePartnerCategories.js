import { useEffect, useState } from 'react';
import { getLogos } from '../api/services';

export const usePartnerCategories = () => {
  const [logos, setLogos] = useState({
    honor: [],
    media: [],
    patron: [],
    sponsor: [],
  });

  useEffect(() => {
    getLogos()
      .then((response) => {
        if (response.data.data && Array.isArray(response.data.data)) {
          const honor = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'honor',
          );

          const media = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'media',
          );

          const patron = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'patron',
          );

          const sponsor = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'sponsor',
          );

          setLogos({ honor, media, patron, sponsor });
        }
      })
      .catch(() => {
        console.error('Błąd podczas pobierania danych:');
      });
  }, []);

  return logos;
};
