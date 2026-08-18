import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const download = {
    mixId: body.mixId,
    device: body.device || 'unknown',
    createdAt: new Date().toISOString(),
  };

  // Prisma download tracking will persist this event.
  console.log('Download event:', download);

  return NextResponse.json({ success: true, download });
}
