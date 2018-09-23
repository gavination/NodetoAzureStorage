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
let Token = new Storage.TokenCredential('ik5zgKhYBj6a5a1Klyn6/NvCz0hSPvWgc/LErWBk/SrtfZJBnRdwdu7bMldrnVPDlZVjD5S63CTHohRZuaGeWA==');
let BlobService = Storage.createBlobServiceWithTokenCredential('https://sparkblobstor.blob.core.windows.net/sample-data', Token);
let ContainerName = 'sample-container';
let DownloadFilepath = path.resolve('./samplebatchfile.csv');
let BlobName = path.basename(DownloadFilepath, path.extname(DownloadFilepath));
function getCSV(req, res) {
    //res.send('Grabbing CSV file...');
    return new Promise((resolve, reject) => {
        BlobService.getBlobToLocalFile(ContainerName, BlobName, DownloadFilepath, err => {
            if (err) {
                //res.send('rejected')
                reject(err);
            }
            else {
                //resolve({ "message: `Download of '${BlobName}' complete`"}
                resolve("Hi fam");
            }
        });
    });
}
exports.getCSV = getCSV;
//# sourceMappingURL=csvRouter.js.map