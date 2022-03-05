import express from 'express'
import cors from "cors"
import axios from "axios"

const baitaserver = express()
baitaserver.use(cors());

baitaserver.get(':endpoint([\\/\\w\\.-]*)', function (req, res) {
    // Remove any trailing slash from base url

    res.header("Access-Control-Allow-Origin", "*");

    //var endpoint = req.header('Target-URL');
    
    
    var endpoint = req.params.endpoint

    endpoint = endpoint.substring(1) 
    
    axios.get(endpoint, {
    }).then(async response => {
        console.log(response.data)
        res.json(await response.data) 
           
    }).catch(async error => {
        res.json(await error)
    })
})


baitaserver.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
