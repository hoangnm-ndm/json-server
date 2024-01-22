import jsonServer from "json-server";
import auth from "json-server-auth";

const app = jsonServer.create();
const router = jsonServer.router("db.json");

// const rules = auth.rewriter({
//   // Permission rules
//   users: 600,
//   messages: 640,
//   // Other rules
//   "/posts/:category": "/posts?category=:category",
// });

// /!\ Bind the router db to the app
app.db = router.db;

// You must apply the auth middleware before the router

// app.use(rules);
app.use(auth);
app.use(router);
app.listen(3000);
