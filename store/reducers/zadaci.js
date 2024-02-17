const zadatakReducer = (state = pocetnoStanje, action) => {
    switch (action.type) {
        case PROMJENA_DOVRSENIH:
            const { idZadatka } = action;

            // Find the task in the current list
            const taskToMove = state.zadaci.find((zadatak) => zadatak.id === idZadatka);

            if (!taskToMove) {
                console.error(`Task with id ${idZadatka} not found.`);
                return state;
            }

            // Move the task to the appropriate list based on your business logic
            const updatedCurrent = state.zadaci.filter((zadatak) => zadatak.id !== idZadatka);
            const updatedFinished = state.dovrseniZadaci.concat(taskToMove);

            return {
                ...state,
                zadaci: updatedCurrent,
                dovrseniZadaci: updatedFinished,
            };

        default:
            return state;
    }
};

export default zadatakReducer;