import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(reuqest: NextRequest) {
  const requestHeaders = new Headers(reuqest.headers);  //  Funksiya, NextRequest növündə bir parametr qəbul edir. Bu parametr, gələn HTTP sorğusunu təmsil edir.

  // const headerList = headers()
  console.log(requestHeaders.get("Authorization"));
  // console.log(headerList.get("Authorization"))

  return new Response("<h1>Profile API data</h1>", {
    headers: {
        "Content-Type": "text/html"  //   Content-Type başlığı text/html olaraq təyin edilir, beləliklə brauzer bu cavabı bir HTML sənədi kimi şərh edir.
    }
  });
}
