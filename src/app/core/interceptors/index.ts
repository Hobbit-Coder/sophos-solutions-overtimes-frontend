import { JwtTokenInterceptor } from "./jwt-token.interceptor";

export const interceptors = [
  JwtTokenInterceptor
]

export * from "./jwt-token.interceptor";
