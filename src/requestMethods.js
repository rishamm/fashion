import axios from "axios";

const BASE_URL ="https://glamorous-lime-pea-coat.cyclic.cloud/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2FkNTIxYjQ4ZjM2MDg0MjQzYzE2ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcxMDI0MywiZXhwIjoxNjg4OTY5NDQzfQ.OCI06EyFG1i9_GIAL3CMAlwmGBSpwc3y6z9dri29AKM ";
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
});