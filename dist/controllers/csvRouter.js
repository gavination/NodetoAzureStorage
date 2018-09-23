"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Storage = __importStar(require("azure-storage"));
const path = __importStar(require("path"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
let Token = process.env.AZURE_STORAGE_CONNECTION_STRING;
let BlobService = Storage.createBlobService(Token);
let ContainerName = 'sample-container';
let DownloadFilepath = path.resolve('./samplebatchfile.csv');
let BlobName = "samplebatchfile";
function getCSV(req, res) {
    return new Promise((resolve, reject) => {
        BlobService.getBlobToLocalFile(ContainerName, BlobName, DownloadFilepath, err => {
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
//# sourceMappingURL=csvRouter.js.map