# RoPro Proxy Server

A Next.js-based proxy server for the RoPro browser extension that forwards API requests to `api.ropro.io` and `ropro.io` with proper authentication headers.

## Features

- **API Proxy**: Forwards requests to `api.ropro.io` and `ropro.io`
- **Authentication Headers**: Automatically forwards `ropro-verification` and `ropro-id` headers
- **CORS Support**: Handles cross-origin requests from browser extensions
- **Vercel Compatible**: Optimized for deployment on Vercel
- **TypeScript**: Full TypeScript support for better development experience

## API Endpoints

### API Routes
- `GET/POST/PUT/DELETE /api/*` → Forwards to `https://api.ropro.io/*`
- `GET/POST/PUT/DELETE /api/ropro/*` → Forwards to `https://ropro.io/*`

### Usage with RoPro Patcher

After deploying this proxy server, update your `proxies.txt` file in the Rust patcher with your Vercel deployment URL:

```
https://your-vercel-app.vercel.app
```

The patched RoPro extension will then use your proxy server instead of the direct RoPro API.

## Development

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to test the proxy.

### Testing the Proxy

You can test the proxy by making requests to the API endpoints:

```bash
# Test API proxy
curl -X GET "http://localhost:3000/api/validateUser.php" \
  -H "ropro-verification: your-token" \
  -H "ropro-id: your-user-id"

# Test ropro.io proxy
curl -X GET "http://localhost:3000/api/ropro/some-endpoint" \
  -H "ropro-verification: your-token" \
  -H "ropro-id: your-user-id"
```

## Deployment

### Vercel (Recommended)

1. Push this code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The `vercel.json` configuration is already set up for optimal performance.

### Manual Deployment

```bash
npm run build
npm start
```

## Configuration

### Environment Variables

No environment variables are required for basic functionality. However, you can add:

- `NODE_ENV`: Set to `production` for production builds

### Custom Headers

The proxy automatically forwards these headers from the client:
- `ropro-verification`: RoPro verification token
- `ropro-id`: User ID
- `content-type`: Request content type

## Security Considerations

- This proxy server forwards all requests to RoPro's API
- Make sure to implement rate limiting if needed
- Consider adding authentication to your proxy if you want to restrict access

## License

This project is created for educational purposes to work with the RoPro browser extension.
