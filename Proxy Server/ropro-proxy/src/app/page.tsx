export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">RoPro Proxy Server</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A Next.js-based proxy server for the RoPro browser extension
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🚀 API Endpoints</h2>
            <div className="space-y-2">
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                <code>GET/POST /api/* → https://api.ropro.io/*</code>
              </div>
              <div className="font-mono text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                <code>GET/POST /api/ropro/* → https://ropro.io/*</code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🔧 Features</h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Automatic header forwarding</li>
              <li>• CORS support for extensions</li>
              <li>• Vercel deployment ready</li>
              <li>• TypeScript support</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">📋 Setup Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Deploy this server to Vercel or your preferred hosting</li>
            <li>Update your RoPro patcher's <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">proxies.txt</code> with your deployment URL</li>
            <li>Run the Rust patcher to generate a patched extension</li>
            <li>Install the patched extension in your browser</li>
          </ol>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Server is running at <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">http://localhost:3001</code>
          </p>
        </div>
      </main>
    </div>
  );
}
