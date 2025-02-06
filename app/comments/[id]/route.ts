import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request, // bu nümunədə request istifadə olunmadığına görə əvvəlinə (_) işarə qoyulur
  { params }: { params: Promise<{ id: string }> } // Burada id adında bir parametr gözlənilir və bu parametr string kimi təyin olunub.
) {
  const resolvedParams = await params; // params-i resolve edin
  if (parseInt(resolvedParams.id) > comments.length) {
    //  Bu hissədə, əgər "resolvedParams.id" dəyəri comments massivinin uzunluğundan böyükdürsə, istifadəçi /comments səhifəsinə yönləndirilir.
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(resolvedParams.id) // massivdəki hər bir şərhin id dəyərini, URL-dən gələn (resolvedParams.id) dəyəri ilə müqayisə edir.
  );
  return Response.json(comment); // Tapılan şərh (comment), JSON formatında bir HTTP cavabı (response) kimi qaytarılır.
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params; // params-i resolve edin
  const body = await request.json(); //  (body) göndərilən JSON məlumatını oxuyur. Bu məlumat asinxron olduğu üçün await istifadə olunur.
  const { text } = body; // JSON məlumatından text adlı xüsusiyyəti çıxarır
  const index = comments.findIndex(
    // "comments" massivində şərti ödəyən ilk elementin indeksini tapır.
    (comment) => comment.id === parseInt(resolvedParams.id) //  "resolvedParams.id" string olduğu üçün parseInt ilə ədədə (integer) => "tam ədəd" çevrilir.
  );
  comments[index].text = text; //   Tapılan şərhə istinad edir.
  return Response.json(comments[index]); //   Şərhin "text" xüsusiyyətini sorğu gövdəsində göndərilən yeni mətn ilə yeniləyir.
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params; // params-i resolve edin
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(resolvedParams.id)
  );
  const deletedComment = comments[index]; //  comments massivindən "index" indeksindəki şərhi alır və bu dəyişənə təyin edilir. Bu, silinəcək şərhlidir.
  comments.splice(index, 1); // (splice): Massivdən müəyyən bir indeksdən başlayaraq müəyyən sayda elementi çıxarır.
  return Response.json(deletedComment); //  Silinən şərh, JSON formatında bir HTTP cavabı olaraq qaytarılır.
}
