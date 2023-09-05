import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";
import webSocketServer from "./web_socket_server.ts";

webSocketServer({
    hostname: 'localhost',
    port: 8080
},
(webSocket) => {
    webSocket.addEventListener('message', ({data}) => {
        assertEquals(data, 'Test Data')
        self.close();
    })
})
