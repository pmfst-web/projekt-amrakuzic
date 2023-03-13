import {ZADACI} from '../../data/test-podaci'
const pocetnoStanje = {
    zadaci: ZADACI,
    filterZadaci: ZADACI,
    dovrseniZadaci: [],
    nedovrseniZadaci: []
}
const zadatakReducer = (state = pocetnoStanje, action) => {
    return state
}
export default zadatakReducer