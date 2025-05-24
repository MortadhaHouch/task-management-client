import { LoginRequest, SignupRequest } from "./types";

export default async function fetchData<T = any>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body: LoginRequest | SignupRequest | BodyInit | {} | null,
  auth:string|"",
  isLoading?: (loading: boolean) => void
): Promise<T | undefined> {
  // Handle loading state if provided
  isLoading?.(true);

  let requestBody: BodyInit | null = null;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    "Set-Cookie":`jwt_token=${auth}`
  };

  // Handle request body based on method
  if (method === "POST" || method === "PUT") {
    if (body) {
      requestBody = typeof body === "object" && !(body instanceof FormData) 
        ? JSON.stringify(body) 
        : body as BodyInit;
      
      // Remove Content-Type header if FormData (it will be set automatically with boundary)
      if (body instanceof FormData) {
        delete headers["Content-Type"];
      }
    }
  }

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_REQUEST_URL + url, {
      method,
      body: requestBody,
      credentials: "include",
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json() as T;
  } catch (error) {
    console.error("Fetch error:", error);
    // Consider re-throwing or returning a standardized error object
    throw error;
  } finally {
    isLoading?.(false);
  }
}