# 02 - NodeJS

## How-to

- `docker build -t app2 ./app`
- `docker run -it --rm -p 9000:80 -v $(pwd)/app/index.js:/srv/index.js app2`

## Output

```
Server running. CTRL+C to terminate.
```
