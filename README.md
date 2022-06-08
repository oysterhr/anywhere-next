Run:

```zsh
# ./home
yarn dev

# ./company
yarn dev
```

Visit `localhost:3000` and see the "Home" app. Click the company link => rewrite to display app from `localhost:4000/company`.

The `home` app has rewrites in `next.config.js` to handle `/company`.  
The `company` app has a `basePath` of `/company` configured.
