# docker-lambda

Docker container that will execute a local lambda function using same version of node as aws lambda (0.10)

## Usage

```
docker run --rm -v "$(pwd):/lambda/function" firstandthird/docker-lambda [script.js] [payload.json]
```

