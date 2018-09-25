# NodetoAzureStorage
Sample that demonstrates accessing Azure blob data using Node.JS (with Typescript) and PowerBI


### Setup Azure Instructions 
1. For this project, one Azure Storage account is required. Follow the directions to create one at [this page](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=portal)
2. Copy the connection string for the storage account by using the directions at [this page](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=portal) in the 'Copy your credentials from the Azure portal' section. Note: This connection string will contain `DefaultEndpointsProtocol`, `AccountName`, `AccountKey`, and `EndpointSuffix`

### Setup Project Instructions
1. Open the project directory with a terminal and run `npm install`
2. While it's installing the node modules, add a file at the root directory named `.env` that contains the following snippet. 
    ```
    AZURE_STORAGE_CONNECTION_STRING="YOUR_AZURE_STORAGE_CONNECTION_STRING_HERE"
    ```
3. Replace `YOUR_AZURE_STORAGE_CONNECTION_STRING_HERE` with the actual connection string from your Azure Storage account and save the file
4. To start the project, run the `npm start`
5. You can now navigate to http://localhost:5000 in the browser