import express from 'express'
import cors from "cors"
import axios from "axios"
//import fetch from 'node-fetch';
//import { HttpsProxyAgent } from 'https-proxy-agent';

const baitaserver = express()
baitaserver.use(cors());

baitaserver.get("/", function (req, res) {
var yada = req.path.substring(1);
    axios.get(yada, {}).then (async response => {res.json(await response.data)}).catch(async error => {res.json(await error)})})
    

//const yada = "https://www.wikiaves.com.br";
//baitaserver.get(':endpoint([\\w\\.-]*)', function (req, res)  {
////Remove any trailing slash from base url
//res.header("Access-Control-Allow-Origin", "*");
//var endpoint = req.header('Target-URL');
//var endpoint = req.params.endpoint;
//var endpoint = req.path.substring(1);
//endpoint = endpoint.substring(1);
//axios.get(endpoint, {}).then(async response => {
//res.json(await response.data) 
//}).catch(async error => {res.json(await error)})})


baitaserver.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, baitaserver.settings.env);
});
