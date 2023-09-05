# Deno webSocketServer

Simple WebSocket server implemented in Deno.

## Usage
Here is an example for a simple WebSocket server that logs the incoming message event.

```ts
webSocketServer(
    {
        hostname: 'localhost',
        port: 8080
    },
    (webSocket) => {
        webSocket.addEventListener(
            'message',
            (event) => {
                console.log(`MessageEvent: ${event}`);
            }
        )
    }
)
```
