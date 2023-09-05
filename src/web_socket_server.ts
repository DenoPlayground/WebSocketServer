/**
 * Use this function to create a simple WebSocket server.
 * 
 * @param options Options for serving the WebSocket
 * @param handler Handler for the WebSocket request
 * @example
 * ```ts
 * // Here is an example for a simple WebSocket server that logs the incoming message event.
 * webSocketServer(
 *     {
 *         hostname: 'localhost',
 *         port: 8080
 *     },
 *     (webSocket) => {
 *         webSocket.addEventListener(
 *             'message',
 *             (event) => {
 *                 console.log(`MessageEvent: ${event}`);
 *             }
 *         )
 *     }
 * )
 * ```
 */
export default function webSocketServer(
    options : Deno.ServeOptions | Deno.ServeTlsOptions,
    handler : (
        webSocket : WebSocket,
        request? : Request
    ) => void
) {
    Deno.serve({
        ...options,
        onListen({
            hostname,
            port
        }) { console.log(`Listening on ws://${hostname}:${port}/ (WebSocketServer)`); }
    }, (request) => {
        if (request.headers.get("upgrade") != "websocket") {
            return new Response(
                null,
                { status: 501 }
            );
        }

        const {
            socket,
            response
        } = Deno.upgradeWebSocket(request);

        handler(
            socket,
            request
        );

        return response;
    })
}

