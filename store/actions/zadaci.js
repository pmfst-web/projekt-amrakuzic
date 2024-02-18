export const PROMJENA_DOVRSENIH = 'PROMJENA_DOVRSENIH';
export const promjenaDovrsenih = (idZadatka) => {
    return {
        type: PROMJENA_DOVRSENIH, 
        payload: { idZadatka },
    };
};