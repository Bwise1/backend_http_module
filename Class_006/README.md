# Arithmetic API

This project is a simple API that performs basic arithmetic operations. The API has the following endpoints:

## Endpoints

### `POST /add`

Adds two numbers.

**Payload:**

```json
{
  "num1": <number>,
  "num2": <number>
}
```

**Response:**

```json
{
  "result": <number>
}
```

### `POST /subtract`

Subtracts two numbers.

**Payload:**

```json
{
  "num1": <number>,
  "num2": <number>
}
```

**Response:**

```json
{
  "result": <number>
}
```

### `POST /divide`

Divides two numbers.

**Payload:**

```json
{
  "num1": <number>,
  "num2": <number>
}
```

**Response:**

```json
{
  "result": <number>
}
```

### `POST /multiply`

Multiplies two numbers.

**Payload:**

```json
{
  "num1": <number>,
  "num2": <number>
}
```

**Response:**

```json
{
  "result": <number>
}
```

## Additional Features

- **Error Handling**: The API handles errors such as division by zero or invalid input with appropriate error messages and status codes.
- **Input Validation**: Input payloads are validated to ensure that `num2` is not zero for division and that both `num1` and `num2` are numbers.
- **Response Formatting**: Responses are standardized with a `result` field to make it easier for clients to parse responses consistently.
- **Documentation**: Use Postman to test in other to make sure Detailed documentation is available for the API, including endpoint usage, expected input/output, and error conditions.

## Getting Started

1. Clone the repository.
2. cd Class_006
3. Install dependencies with `npm install`.
4. Set up environment variables as needed.
5. Start the server with `npm run dev`.

## Additional Features (Above and beyond)

### History

The API keeps a history of all arithmetic operations. After each operation, the API adds an entry to the history. Each entry includes the operation, the operands, and the result should be stored to a json file.

### `GET /history`

Retrieves the history of all arithmetic operations.

**Response:**

```json
[
  {
    "operation": <string>,
    "operands": {
      "num1": <number>,
      "num2": <number>
    },
    "result": <number>
  },
  ...
]
```

**_Example:_**

```json
[
  {
    "operation": "add",
    "operands": {
      "num1": 5,
      "num2": 3
    },
    "result": 8
  },
  ...
]
```
