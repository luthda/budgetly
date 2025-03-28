import { ApiResponse, HttpStatus } from "./index";

declare global {
  namespace Express {
    interface Response {
      sendSuccess: <T>(data: T, statusCode?: number) => Response<ApiResponse<T>>;
    }
  }
}
