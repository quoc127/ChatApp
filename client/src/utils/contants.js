export const HOST = import.meta.env.VITE_SERVER_URL;

// Auth Route
export const AUTH_ROUTES = "api/user";
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/register`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;
export const UPDATE_PROFILLE_ROUTE = `${AUTH_ROUTES}/update-profile`;
export const ADD_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/add-profile-image`;
export const REMOVE_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/remove-profile-image`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

// Contact Route
export const CONTACTS_ROUTES= "api/contacts"
export const SEARCH_CONTACT_ROUTUES= `${CONTACTS_ROUTES}/search`

// Messages
export const MESSAGE_ROUTES = "api/messages"
export const GET_ALL_MESSAGES_ROUTES= `${MESSAGE_ROUTES}/get-messages`