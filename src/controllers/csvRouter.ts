// Reference the Request and Response types from express
import { Request, Response } from 'express';
import * as yargs from 'yargs';
import {Argv} from 'yargs';
import * as Storage from 'azure-storage';
import  * as path from 'path';

let Token = new Storage.TokenCredential('ik5zgKhYBj6a5a1Klyn6/NvCz0hSPvWgc/LErWBk/SrtfZJBnRdwdu7bMldrnVPDlZVjD5S63CTHohRZuaGeWA==');
let BlobService = Storage.createBlobServiceWithTokenCredential('https://sparkblobstor.blob.core.windows.net/sample-data', Token);
let ContainerName = 'sample-container';
let DownloadFilepath = path.resolve('./samplebatchfile.csv');
let BlobName = path.basename(DownloadFilepath, path.extname(DownloadFilepath));


export function getCSV(req: Request, res: Response) {
    //res.send('Grabbing CSV file...');
    return new Promise((resolve, reject) => {
        BlobService.getBlobToLocalFile(ContainerName, BlobName, DownloadFilepath, err => {
            if(err) {
                reject(err);
            } else {
                resolve({ message: `Download of '${BlobName}' complete`});
            }
        })
    })
}




