import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import webSocketServer from "./web_socket_server.ts";

Deno.test(
    'Test WebSocket connection.',
    async () => {
        const webSocketServerPath = new URL("./create_web_socket_server.test_asset.ts", import.meta.url).href;

        const worker = new Worker(webSocketServerPath, { type: "module" })
        
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // const testStringToSend = 'Test Data'

        const webSocket = new WebSocket('ws://localhost:8080')
        
        webSocket.addEventListener('open', () => {
            console.log('connected');
            
            webSocket.send('Test Data');
        })
    }
)
