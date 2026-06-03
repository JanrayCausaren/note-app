import { isAxiosError } from "axios";
import { api } from "./axios.api";

// api.interceptors.response.use(
//   (res) => res,
//   (error: unknown) => {
//     if (isAxiosError(error)) {
//       const message = error.response?.data?.message || "Request failed";

//       return Promise.reject(new Error(message));
//     }

//     return Promise.reject(new Error("Unknown error"));
//   },
// );

export class ApiError extends Error {
  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = "ApiError";
  }
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error)) {
      const data = error.response?.data;

      throw new ApiError(
        data?.message ?? "Something went wrongdfdfdf",
        error.response?.status,
        data?.code,
      );
    }

    throw new ApiError("Unknown error");
  },
);
