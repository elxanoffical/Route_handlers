import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers); 

  const theme = request.cookies.get("theme");
  console.log(requestHeaders.get("Authorization"));
  console.log(theme);

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "resultsCookie=20; Path=/; HttpOnly; Secure", // Cookie burada təyin edilir
    },
  });
}
