export const GET_PASS = 'GET_PASS';

export const getPass = (getPassword) => dispatch => {
    dispatch({
        type:GET_PASS,
        payload: getPassword
    })
};

