export const edit_profile = (data) => {
    return (dispatch) => {
        dispatch({
            type : "edit_profile",
            payload: data,
        })
    }
}