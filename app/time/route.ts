export const dynamic = "force-dynamic" 
//  Bu seçim ilə API route-un hər zaman dinamik olaraq işləməsini təyin edirik.
//  Yəni hər dəfə sorğu edildikdə yeni cavab yaradılır və heç bir caching tətbiq edilmir.
export async function GET() {  // Bu API route, hər dəfə çağırıldıqda cari vaxtı qaytarır.
  // Cavab heç vaxt cache-lənmir.
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
