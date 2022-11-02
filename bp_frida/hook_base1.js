Java.perform(function () {

    var jsonRequest = Java.use("*.*.*****");            //use some java class
    var requestUtil = Java.use("*.*.*****");  //use some java class


    jsonRequest.paraMap.implementation = function (a) {
        console.log("jsonRequest.paraMap is called");
        return this.paraMap(a);
    }           //overwrite  and test print

//    jsonRequest.addRequestMap.implementation = function (addMap,a) {
//        console.log("jsonRequest.addRequestMap is called");
//        return this.addRequestMap(addMap,a);
//    }

})