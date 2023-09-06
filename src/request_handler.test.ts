import { assertEquals } from "https://deno.land/std@0.201.0/assert/assert_equals.ts";
import requestHandler from "./request_handler.ts";

Deno.test(
    'Request handler upgrade incoming request.',
    () => {
        const response = requestHandler(
            new Request('http://localhost:8080'),
            () => {}
        )
        assertEquals(
            response.headers.get('upgrade'),
            'websocket'
        )
    }
)
