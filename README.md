# chat-app

Basic chat app with ExpressJS

## Tables

### User

- id
- name
- email
- password

### Message

- id
- content
- senderId
- recieverId
- dateTime
- seenDate
- deletedAt

## Endpoint

- POST /register
- POST /login
- GET /messages
- GET /messages/:messageId
- POST /messages/send/:userid
- DELETE /messages/:messageId
- PUT /messages/:messageId
