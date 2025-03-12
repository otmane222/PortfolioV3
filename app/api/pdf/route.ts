import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";

// export async function GET(req: NextRequest) {
//   const filePath = path.join(process.cwd(), "public/pdfs/pong-site.pdf");

//   if (!fs.existsSync(filePath)) {
//     return new Response("File not found", { status: 404 });
//   }

//   // Read the file as a Buffer
//   const pdfBuffer = fs.readFileSync(filePath);

//   return new Response(pdfBuffer, {
//     headers: {
//       "Content-Type": "application/pdf",
//       "Content-Disposition": "inline", // Allows direct viewing
//     },
//   });
// }
export async function GET(req: NextRequest, { params }: { params: { filename: string } }) {
  const { filename } = params; // Get the dynamic filename from the URL
  const filePath = path.join(process.cwd(), "public/pdfs", filename);


  if (!fs.existsSync(filePath)) {
    console.log("File not found", filePath);
    return new Response("File not found", { status: 404 });
  }

  // Read the file as a Buffer
  const pdfBuffer = fs.readFileSync(filePath);

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline",
    },
  });
}