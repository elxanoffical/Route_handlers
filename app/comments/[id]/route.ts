import { comments } from "../data";

export async function GET(
  _request: Request,   // bu numunede request istifade olunmadiqina gore evveline (_) isaret qoyulur
  { params }: { params: { id: string } }   // Burada id adında bir parametr gözlənilir və bu parametr string kimi təyin olunub.
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)   // massivdəki hər bir şərhin id dəyərini, URL-dən gələn (params.id) dəyəri ilə müqayisə edir.
  );
  return Response.json(comment);   // Tapılan şərh (comment), JSON formatında bir HTTP cavabı (response) kimi qaytarılır.
}


export async function PATCH(
  request: Request,

  { params }: { params: { id: string } }
) {
  const body = await request.json();       //  (body) göndərilən JSON məlumatını oxuyur. Bu məlumat asinxron olduğu üçün await istifadə olunur.

  const { text } = body;       // JSON məlumatından text adlı xüsusiyyəti çıxarır
  
  const index = comments.findIndex(    // "comments" massivində şərti ödəyən ilk elementin indeksini tapır.
    (comment) => comment.id === parseInt(params.id)  //  "params.id" string olduğu üçün parseInt ilə ədədə (integer) => "tam eded" çevrilir.
  );
  comments[index].text = text;   //   Tapılan şərhə istinad edir.
  return Response.json(comments[index]);   //   Şərhin "text" xüsusiyyətini sorğu gövdəsində göndərilən yeni mətn ilə yeniləyir.
}
