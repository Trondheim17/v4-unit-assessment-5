const initialState = {
    username: '',
    profilePicture: ''
}

const UPDATE_USER = "UPDATE_USER"
const LOGOUT_USER = 'LOGOUT_USER'

export function updateUser(payload){
    return {
        type: UPDATE_USER,
        payload
    }
}

export function logout(payload) {
    return {
        type: LOGOUT_USER,
        payload
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_USER:
            return {...state, username: payload.username, profilePicture: payload.profilePicture}
        case LOGOUT_USER:
            return reducer()
        default:
            return state
    }
}