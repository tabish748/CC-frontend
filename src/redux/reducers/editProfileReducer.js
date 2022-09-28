const initialState = []
const asyncCall = async (requestOptions) => {
    const api = "http://127.0.0.1:8000/user/edit-profile"
    const response = await fetch(api , requestOptions);
    const data = await response.json();
    console.log(
        data.error , data.message
    )
}

export const editProfileReducer = (state = initialState , action) => {
    if (action.type === "edit_profile"){
        const requestOptions = {
            method : 'POST',
            headers : {'Content-Type': 'application/json',
                       'Authorization' : "token " + sessionStorage.getItem("token")},
            body : JSON.stringify(action.payload)
        }
        console.log(action.payload)
        asyncCall(requestOptions);
        return state
    }

    return state
}

