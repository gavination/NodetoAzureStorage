// Reference the Request and Response types from express
import { Request, Response } from 'express';
import * as Storage from 'azure-storage';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();

let Token = process.env.AZURE_STORAGE_CONNECTION_STRING;
let BlobService = Storage.createBlobService(Token);
let ContainerName = 'testcontainer';
let DownloadFilepath = path.resolve('./samplebatchfile.csv');
let BlobName = "samplebatchfile.csv"

export function getCSV(req: Request, res: Response) {
    return new Promise((resolve, reject) => {
        BlobService.getBlobToStream(ContainerName, BlobName, fs.createWriteStream(DownloadFilepath), err => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: `Download of '${BlobName}' complete` });
            }
        })
    })
}