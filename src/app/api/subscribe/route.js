import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // MailerLite API endpoint
    const url = `https://connect.mailerlite.com/api/subscribers`;

    const subscriberData = {
      email,
      status: 'active',
      fields: {
        name: name || '',
      },
    };

    // Add to specific group if groupId is provided and is a valid number
    if (groupId && !isNaN(groupId)) {
      subscriberData.groups = [groupId];
    }

    // Call MailerLite API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify(subscriberData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('MailerLite API error:', data);

      // Handle duplicate subscriber (already subscribed)
      if (response.status === 422 && data.message?.includes('already exists')) {
        return NextResponse.json(
          { message: 'You are already subscribed!' },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred during subscription' },
      { status: 500 }
    );
  }
}
