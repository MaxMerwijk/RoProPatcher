import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleProxyRequest(request, params.slug, 'https://ropro.io');
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleProxyRequest(request, params.slug, 'https://ropro.io');
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleProxyRequest(request, params.slug, 'https://ropro.io');
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  return handleProxyRequest(request, params.slug, 'https://ropro.io');
}

async function handleProxyRequest(request: NextRequest, slug: string[], baseUrl: string) {
  try {
    // Construct the target URL
    const path = slug.join('/');
    const targetUrl = `${baseUrl}/${path}`;

    // Add query parameters if they exist
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const finalUrl = searchParams.toString()
      ? `${targetUrl}?${searchParams.toString()}`
      : targetUrl;

    // Get headers from the original request
    const headers = new Headers();

    // Copy original headers (except host)
    request.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'host') {
        headers.set(key, value);
      }
    });

    // Add required RoPro headers if provided
    const roproVerification = request.headers.get('ropro-verification');
    const roproId = request.headers.get('ropro-id');

    if (roproVerification) {
      headers.set('ropro-verification', roproVerification);
    }

    if (roproId) {
      headers.set('ropro-id', roproId);
    }

    // Set the host header to ropro.io
    headers.set('host', 'ropro.io');

    // Prepare the request body for POST/PUT requests
    let body: string | FormData | ArrayBuffer | undefined;
    if (request.method === 'POST' || request.method === 'PUT') {
      const contentType = request.headers.get('content-type');

      if (contentType?.includes('application/json')) {
        body = await request.text();
      } else if (contentType?.includes('multipart/form-data') || contentType?.includes('application/x-www-form-urlencoded')) {
        // For form data, we need to forward it as-is
        body = await request.arrayBuffer();
        headers.set('content-type', contentType);
      }
    }

    // Make the request to the RoPro API
    const response = await fetch(finalUrl, {
      method: request.method,
      headers,
      body: body instanceof ArrayBuffer ? body : body,
    });

    // Get the response data
    const responseData = await response.arrayBuffer();

    // Create response headers
    const responseHeaders = new Headers();

    // Copy relevant response headers
    response.headers.forEach((value, key) => {
      // Skip certain headers that shouldn't be forwarded
      if (!['set-cookie', 'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization', 'te', 'trailers', 'transfer-encoding', 'upgrade'].includes(key.toLowerCase())) {
        responseHeaders.set(key, value);
      }
    });

    // Add CORS headers for browser compatibility
    responseHeaders.set('access-control-allow-origin', '*');
    responseHeaders.set('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('access-control-allow-headers', 'content-type, ropro-verification, ropro-id');

    return new NextResponse(responseData, {
      status: response.status,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse('Proxy Error', { status: 500 });
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'access-control-allow-headers': 'content-type, ropro-verification, ropro-id',
    },
  });
}
