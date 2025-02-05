import { comments } from "../data";

export async function GET(
  _request: Request, // bu numunede request istifade olunmadiqina gore evveline (_) isaret qoyulur
  { params }: { params: { id: string } } // Burada id adında bir parametr gözlənilir və bu parametr string kimi təyin olunub.
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id) // massivdəki hər bir şərhin id dəyərini, URL-dən gələn (params.id) dəyəri ilə müqayisə edir.
  );
  return Response.json(comment); // Tapılan şərh (comment), JSON formatında bir HTTP cavabı (response) kimi qaytarılır.
}


// export async function PATCH(
//   request: Request,

//   { params }: { params: { id: string } }
// ) {
//   const body = await request.json();
//   const { text } = body;
//   const index = comments.findIndex(
//     (comment) => comment.id === parseInt(params.id)
//   );
//   comments[index].text = text;
//   return Response.json(comments[index]);
// }
