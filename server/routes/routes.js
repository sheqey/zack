
const express = require("express")


const rout = express.Router();


const services = require("../render")

rout.get("/", services.indexrout);
rout.get("/creat", services.creatroute);
rout.get("/creatbiz", services.creatbiziroute);

rout.get("/read", services.readroute);
rout.get("/update", services.updateroute);
rout.get("/combinedupdate", services.cupdateroute);
rout.get("/delete", services.deleteroute);
rout.get("/newamenity", services.getamenity);
rout.get("/hospital", services.gethos);
rout.get("/mpesa", services.mpesa);
rout.get("/movies", services.movies);
rout.get("/movie", services.movie);
rout.post("/callbackurl", services.callbackurl);
rout.post("/sendmoney", services.sendmoney);

rout.get("/combined", services.combined);
rout.get("/transactions", services.transactions);
rout.get("/addcontact", services.getcontact);
rout.get("/addservice", services.getservice);
rout.get("/addep", services.getdep);
rout.get("/addocs", services.getdocs);
rout.get("/book", services.getbook);
rout.get("/nhif", services.nhif);
//rout.get("/covered", services.covered);
rout.get("/combinedview", services.combinedview);
rout.get("/set", services.set);
rout.get("/login", services.login);
rout.get("/admin", services.adlogin);
rout.get("/adminp", services.adminpage);
rout.post("/plogin", services.plogin);
rout.post("/padminlogin", services.palogin);
rout.get("/reg", services.reg);
rout.get("/apps", services.getapp); 
rout.get("/checkapps", services.getapps);   
rout.post("/api/creat", services.apicreatroute);
rout.post("/api/addcontact", services.apiccreatroute);
rout.post("/api/addep", services.apidccreatroute);
rout.post("/api/book", services.apibook);
rout.post("/checknhif", services.checknhif);
rout.post("/pu", services.pu);
//rout.post("/api/addoc", services.addoc);
rout.post("/api/addservice", services.apisccreatroute);
rout.post("/students/api/creat", services.apicreate);

rout.post("/api/apicreatbiziroute", services.apicreatbiziroute);
rout.post("/api/creatnewbiz", services.apicreatnewbiz);  

rout.post("/api/cupdate/:id", services.capiupdateroute);
rout.get("/api/delete", services.apideleteroute);

rout.get("/api/cdelete", services.capideleteroute);
rout.get("/combineddelete", services.cdeleteroute);
          














const path = require("path");

const multer = require('multer');
const folderPath = path.resolve('C:/Users/shark/Desktop/project22/project2/images/images/');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, folderPath); // specify the destination folder for the uploaded files
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); // use the original file name as the name for the saved file
  }
});

const upload = multer({ storage: storage });

rout.post("/api/addoc",upload.single('image'), services.addoc);

rout.post("/regester",upload.single('image'), services.regester);
module.exports = rout;