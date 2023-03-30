import { RxStomp } from "@stomp/rx-stomp";
import { WebSocket } from 'ws';

Object.assign(global, { WebSocket});

const token = "eyJraWQiOiJwekNZbEIwWjFGZzdGZURhN0FhSTdJXC9pNndNRTl5WmNJRWFLcnVCNlpQMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxZDRmZGZlYS0xOGIzLTRjMTUtODAwZi01NGYzOWRlNjI3MmEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV8wNUV6MFlPOXAiLCJjbGllbnRfaWQiOiI0ZW4xN2Q0b24zY2xmYmo0ajhxb2p1MXJncSIsIm9yaWdpbl9qdGkiOiI4NjEzNTgyMy1iM2ZkLTRlYjMtODQ1My0wMDA3YjdhZTRlOGEiLCJldmVudF9pZCI6IjlhZGM2MWIyLTNkNzYtNGQ5ZC1iYjUzLTgwM2I3OGQxNDNjMiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODAxMTA0NjgsImV4cCI6MTY4MDE5Njg2OCwiaWF0IjoxNjgwMTEwNDY4LCJqdGkiOiJhNmRiMTQ2YS05MmQ1LTQ2ZWQtOTc2Zi00ZDJhMDQ4M2MwNjIiLCJ1c2VybmFtZSI6ImVjb2xhYi10ZXN0LWV1In0.fQy8r-qxe2CpvSW7Zd9kje9VaK-L6zrkMUdsfQieQLMbUt9-XfGtxEPGtBUXlED2wFx2qy9rclnaJRKdlI8ikYdKkwenRwFlnGnQfZ4_0QXt8GwgYzBJ2HI3iqWZ-nKzyJo9k5DrQzgt8UsT8cryQy0PveCKDlbI_hd6EVTjj2ltSNNS9bZSb15lPc8psGBRlkAMO2QSCWrlcCKyQqNdXDe8A1-9quOCApZ28tpm8rI4ycKO5Jsbjk8D9ai3Fpj8phdPOFGr2yXBgCfCuoqWVkljvqBWbHXLh6FiQiGVigjjb0ji7AI82nY-uW88GVQbVljNFstYCzo1boj-GNDwFg"
const rxStomp = new RxStomp();

rxStomp.configure({
                      brokerURL: 'wss://tds-real-time-api.eu.i.savr.saveris.net/web-socket',
                      debug: console.log.bind(console), 
                      connectHeaders: {
                          Authorization: `Bearer ${token}`
                      }
                  })

rxStomp.activate();


const subscription = rxStomp
.watch({ destination: "/user/queue/alarms" })
.subscribe((message) => {
    console.log(message.body)
});
