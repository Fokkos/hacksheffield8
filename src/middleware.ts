import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
  if (req.method === 'POST' && !req.url.endsWith('/submit-feedback')) {
    return Response.json({
      "very": "naughty 👎👎",
      "video": "https://youtu.be/xxhNCY21-xs?si=NUT603N8JnH6noH8"
    })
  }
}