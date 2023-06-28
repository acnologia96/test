import axios from "axios";

export const register = async (value) => {
    await axios.post('http://localhost:5000/api/register', value);
};

export const login = async (value) => {
    await axios.post('http://localhost:5000/api/login', value);
};

