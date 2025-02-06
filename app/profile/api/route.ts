import { type NextRequest } from "next/server";
import { headers,cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);  //  Funksiya, NextRequest növündə bir parametr qəbul edir. Bu parametr, gələn HTTP sorğusunu təmsil edir.

  cookies().set("resultsCookie", "20")     // kod isleyir amma set-in alti qizarir
  const theme =  request.cookies.get("theme")
  console.log(requestHeaders.get("Authorization"));

  console.log(theme)

  return new Response("<h1>Profile API data</h1>", {
    headers: {
        "Content-Type": "text/html",
        "Set-cookie": "theme=dark"  //   Content-Type başlığı text/html olaraq təyin edilir, beləliklə brauzer bu cavabı bir HTML sənədi kimi şərh edir.
    }
  });
}
