const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const envs = require("../controllers/envs.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);

   app.post("/api/variables/add", envs.add);  
   app.put("/api/variables/update", envs.update);
   app.get("/api/variables/:id", envs.fetch);
};