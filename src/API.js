import axios from "axios"

export const networkRequest = axios.create({
    baseURL: 'https://rxnav.nlm.nih.gov/REST',
    timeout: 2000
})