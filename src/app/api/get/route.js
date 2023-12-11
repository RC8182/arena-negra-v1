import { connection } from "../../../../db/connection/connection";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    // Hacer la consulta SQL
    const [rows] = await connection.query("SELECT id, url_image, description FROM photos");

    // Formatear los resultados en un objeto JSON
    const photos = rows.map(row => ({
      id: row.id,  
      url: row.url_image,
      comment: row.description
    }));

    // Devolver los resultados
    return NextResponse.json(photos);
  } catch (error) {
    console.error('Error al obtener las fotos:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {status:500});
  }
}
