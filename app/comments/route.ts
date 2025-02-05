import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(reuqest: NextRequest) {

   const searchParams = reuqest.nextUrl.searchParams  //  Sorğunun URL-dəki parametrlərini ehtiva edir.
   const query = searchParams.get("query")  // query parametrinin dəyəri alınır
   const filteredComments = query
   ? comments.filter((comment)=> comment.text.includes(query))  //includes(query): query dəyərinin "comment.text" içində olub-olmadığını yoxlayır. Əgər varsa, true qaytarır; yoxdursa, false.
   : comments
  return Response.json(filteredComments);

}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  
  comments.push(newComment);
  
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
