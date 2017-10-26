# 02 - NodeJS

## How-to

- `docker build -t app2 ./app`
- `docker run -it --rm -p 9000:80 -v $(pwd)/app:/srv app2`

## Output

- open in browser `http://localhost:8000` (web)
- appear in terminal

```
Server running. CTRL+C to terminate.
```

![](https://raw.githubusercontent.com/trainit/2017-10-25-docker-meetup/master/02-node/screen1.png)
