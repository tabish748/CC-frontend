const questionState = {
    question:[],
}

export const QuestionReducer = (state= questionState, action) => {
    switch(action.type){
        case 'GET-QUESTIONAIR':
            state.question.push(action.payload);
            return state;
            default:
                return state                        
    }
} 