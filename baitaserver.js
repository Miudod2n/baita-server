import express from 'express'
import cors from "cors"
import axios from "axios"

const baitaserver = express()
baitaserver.use(cors());

baitaserver.use((req, res, next) => {
  if (req.path.slice(-1) === '/' && req.path.length > 1) {
    const query = req.url.slice(req.path.length)
    const safepath = req.path.slice(0, -1).replace(/\/+/g, '/')
      console.log("poop");
    res.redirect(301, safepath + query)
      axios.get(safepath + query, {
  
    }).then(async response => {

        res.json(await response.data) 
           
    }).catch(async error => {
        res.json(await error)
    });
      
  } else {
      console.log("pee");
    next()
  }
})


//baitaserver.get(':endpoint([\\w\\.-]*)', function (req, res)  {
     // Remove any trailing slash from base url

    //res.header("Access-Control-Allow-Origin", "*");

    //var endpoint = req.header('Target-URL');
        
    //var endpoint = req.params.endpoint;
    //  var endpoint = req.path.substring(1);
    //endpoint = endpoint.substring(1);
   //        console.log(req.params.endpoint);
   // console.log(endpoint);
   // axios.get(endpoint, {
  
  //  }).then(async response => {

    //    res.json(await response.data) 
           
   // }).catch(async error => {
   //     res.json(await error)
   // })
//})


baitaserver.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, baitaserver.settings.env);
});
