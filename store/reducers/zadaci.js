import { ZADACI } from "../../data/test-podaci";
import { PROMJENA_DOVRSENIH, PROMJENA_NEDOVRSENIH } from "../actions/zadaci";

const pocetnoStanje = {
  zadaci: ZADACI,
  dovrseniZadaci: [],
  nedovrseniZadaci: [],
};

const zadatakReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_DOVRSENIH:
      const { idZadatka: idDovrsenog } = action.payload;

      // Find the task in the current list
      const taskToMoveDovrseni = state.zadaci.find((zadatak) => zadatak.id === idDovrsenog);

      if (!taskToMoveDovrseni) {
        console.error(`Task with id ${idDovrsenog} not found.`);
        return state;
      }

      // Move the task to the appropriate list based on your business logic
      const updatedCurrentDovrseni = state.zadaci.filter((zadatak) => zadatak.id !== idDovrsenog);
      const updatedFinishedDovrseni = state.dovrseniZadaci.concat(taskToMoveDovrseni);

      return {
        ...state,
        zadaci: updatedCurrentDovrseni,
        dovrseniZadaci: updatedFinishedDovrseni,
      };

    case PROMJENA_NEDOVRSENIH:
      const { idZadatka: idNedovrsenog } = action.payload;

      // Find the task in the current list
      const taskToMoveNedovrseni = state.zadaci.find((zadatak) => zadatak.id === idNedovrsenog);

      if (!taskToMoveNedovrseni) {
        console.error(`Task with id ${idNedovrsenog} not found.`);
        return state;
      }

      // Move the task to the appropriate list based on your business logic
      const updatedCurrentNedovrseni = state.zadaci.filter((zadatak) => zadatak.id !== idNedovrsenog);
      const updatedFinishedNedovrseni = state.nedovrseniZadaci.concat(taskToMoveNedovrseni);

      return {
        ...state,
        zadaci: updatedCurrentNedovrseni,
        nedovrseniZadaci: updatedFinishedNedovrseni,
      };

    default:
      return state;
  }
};

export default zadatakReducer;