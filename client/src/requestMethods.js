import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDZlOTQyMTQzNTg2OWI1ZDg1MmRmNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODc0MDQzOSwiZXhwIjoxNjU4OTk5NjM5fQ.u53Zb48GVDqRe_P5V2RhCkcVu6hlu-yqMtycbvYbq_s";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `bearer ${TOKEN}` },
});
