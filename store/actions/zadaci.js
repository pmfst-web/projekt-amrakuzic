export const PROMJENA_DOVRSENIH = 'PROMJENA_DOVRSENIH';
export const PROMJENA_NEDOVRSENIH = 'PROMJENA_NEDOVRSENIH';
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