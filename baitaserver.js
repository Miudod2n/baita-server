import express from 'express'
import cors from "cors"
import axios from "axios"

const baitaserver = express()
baitaserver.use(cors());

baitaserver.use(function(req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.redirect(301, req.path.substring(1));
      res.header("Access-Control-Allow-Origin", "*");
     // if (req.path.length > 1 && /\/$/.test(req.path)) {
     //   var query = req.url.slice(req.path.length)
     //   res.redirect(301, req.path.slice(0, -1) + query)
     //       console.log("poopsie")
     // } else {
     //       console.log(req.path);
     //       console.log( req.url.slice(req.path.length));
      //      console.log("pee")
      //  next()
      
    });
baitaserver.use(cors());
//baitaserver.get(':endpoint([\\w\\.-]*)', function (req, res)  {
//baitaserver.get(':endpoint([\\/\\w\\.-]*)', function (req, res) {
baitaserver.get('/', function (req, res) {
     // Remove any trailing slash from base url

    res.header("Access-Control-Allow-Origin", "*");

    //var endpoint = req.header('Target-URL');
        
    var endpoint = req.params.endpoint;
    endpoint = endpoint.substring(1);
           console.log(req.params.endpoint);
    console.log(endpoint);
    axios.get(endpoint, {
  
    }).then(async response => {

        res.json(await response.data) 
           
    }).catch(async error => {
        res.json(await error)
    })
})


baitaserver.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, baitaserver.settings.env);
});
