setTimeout(function() {
    Java.perform(function() {
      var hook = Java.use("sg.vantagepoint.a.c");
      var ahook = Java.use("sg.vantagepoint.a.a");
      //console.log("[*]: hooking target class");
      hook.a.overload().implementation = function() {
        return false;
      }
  
      hook.b.overload().implementation = function() {
        return false;
      }
  
      hook.c.overload().implementation = function() {
        var revalue = hook.c.overload().call(this);
        console.log("[*] return"+revalue);
        return false;
      }
  });
      
  }, 0);