"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const csvRouter = __importStar(require("./controllers/csvRouter"));
// Creates a new Express app instance
const app = express_1.default();
// Configures the http://localhost:5000/ route to send a text response
app.get("/", (req, res, next) => {
    csvRouter
        .getCSV(req, res)
        .then(result => {
        res.send(result);
        next();
    })
        .catch(err => {
        res.send(`Error: ${err}`);
        next();
    });
});
app.get("/get", (req, res, next) => {
    csvRouter
        .getJSON(req, res)
        .then(result => {
        res.send(result);
        next();
    })
        .catch(err => {
        res.send(`Error: ${err}`);
        next();
    });
});
// Starts the app on port 5000, then calls the callback when
// the app successfully starts.
app.listen(5000, () => {
    console.log("Listening on port 5000: http://localhost:5000");
});
//# sourceMappingURL=index.js.map