import axios from 'axios'


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.hubflow.ai/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.'

    return Promise.reject({
      message,
      status: error.response?.status ?? null,
    })
  },
)

export default apiClient
