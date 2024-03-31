let initialState ;
if(JSON.parse(localStorage.getItem("taskData"))){
    initialState= JSON.parse(localStorage.getItem("taskData"));
}else{
    initialState=[];
}
const changeStore = (state=initialState, action) => {

    switch(action.type) {
        case "NEW" : return [...state, action.payload]
        default: return state;
        case "UPDATE" : return action.payload;

    }
}
export default changeStore;