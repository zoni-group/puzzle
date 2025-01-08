import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const puzzleId = searchParams.get('puzzle_id');
  const answer = searchParams.get('answer');

  if (!puzzleId || !answer) {
    return NextResponse.json(
      { error: 'Missing puzzle_id or answer parameter.' },
      { status: 400 }
    );
  }

  const apiUrl = `https://www.zoni.edu/api/method/zoni_edu.zoni_edu.doctype.puzzle.puzzle.check_answer?puzzle_id=${encodeURIComponent(
    puzzleId
  )}&answer=${encodeURIComponent(answer)}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers if required by the external API
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
