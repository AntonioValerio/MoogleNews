import { apiRequest } from "../configs/apiMiddleware";

export default {
  getAll: () => apiRequest("GET", `/news`),
  getOne: (id) => apiRequest("GET", `/news/${id}`),
  create: (jsonData) => apiRequest("POST", `/news`, { jsonData }),
  update: (id, jsonData) => apiRequest("PUT", `/news/data/${id}`, { jsonData }),
  setCover: (id, formData) => apiRequest("PUT", `/news/cover/${id}`, { formData }),
  remove: (id) => apiRequest("DELETE", `/news/${id}`),
};
