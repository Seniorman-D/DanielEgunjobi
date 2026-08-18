import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const event = {
    mixId: body.mixId,
    type: body.type || 'PLAY_STARTED',
    progress: body.progress || 0,
    createdAt: new Date().toISOString(),
  };

  // Database persistence will connect through Prisma analytics model.
  console.log('Listen event:', event);

  return NextResponse.json({ success: true, event });
}
