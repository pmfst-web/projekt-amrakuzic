export const PROMJENA_DOVRSENIH = 'PROMJENA_DOVRSENIH';
export const PROMJENA_NEDOVRSENIH = 'PROMJENA_NEDOVRSENIH';
export const DODAJ_ZADATAK = 'DODAJ_ZADATAK';
export const IZBRISI_ZADATAK = 'IZBRISI_ZADATAK';
export const FILTRIRAJ = 'FILTRIRAJ';
export const RESET_FILTER = 'RESET_FILTER';

export const promjenaDovrsenih = (idZadatka) => {
    return {
        type: PROMJENA_DOVRSENIH, 
        payload: { idZadatka },
    };


};

export const promjenaNedovrsenih = (idZadatka) => {
    return {
        type: PROMJENA_NEDOVRSENIH, 
        payload: { idZadatka },
    };
};

export const dodajZadatak = (noviZadatak) => {
    return {
        type: DODAJ_ZADATAK,
        payload: { noviZadatak },
    };

};

export const izbrisiZadatak = (idZadatka) => {
    return {
        type: IZBRISI_ZADATAK, 
        payload: { idZadatka },
    };


};

export const filtriraj = () => {
    return {
        type: FILTRIRAJ, 
    };
};

export const resetFilter = () => {
    return {
      type: RESET_FILTER,
    };
  };