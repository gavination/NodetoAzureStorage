"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Storage = __importStar(require("azure-storage"));
const path = __importStar(require("path"));
const dotenv = __importStar(require("dotenv"));
const fs = __importStar(require("fs"));
const csvtojson_1 = __importDefault(require("csvtojson"));
const assert_1 = require("assert");
dotenv.config();
let Token = process.env.AZURE_STORAGE_CONNECTION_STRING;
let BlobService = Storage.createBlobService(Token);
let ContainerName = 'testcontainer';
let DownloadFilepath = path.resolve('./samplebatchfile.csv');
let BlobName = "samplebatchfile.csv";
let ConvertedObject = {};
function getCSV(req, res) {
    return new Promise((resolve, reject) => {
        BlobService.getBlobToStream(ContainerName, BlobName, fs.createWriteStream(DownloadFilepath), err => {
            if (err) {
                reject(err);
            }
            else {
                resolve({ message: `Download of '${BlobName}' complete` });
            }
        });
    });
}
exports.getCSV = getCSV;
function getJSON(req, res) {
    return new Promise((resolve, reject) => {
        csvtojson_1.default().fromFile(DownloadFilepath).then((result) => {
            console.log(result);
            resolve({ result });
        });
    }).catch(err => {
        assert_1.rejects(err);
    });
}
exports.getJSON = getJSON;
//# sourceMappingURL=csvRouter.js.map