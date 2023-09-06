/**
 * Use this function as a handler for incoming requests.
 * 
 * @param request The incoming request
 * @param handler The request callback handler
 * @returns The upgraded http request
 */
export default function requestHandler(
    request : Request, 
    handler : (
        webSocket : WebSocket,
        request? : Request
    ) => void
) : Response {
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
}
