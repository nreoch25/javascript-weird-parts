(function(global, $) {
  // function that gets exposed and returns an object based on the new function constructor
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }
  // not exposed to the outside
  var supportedLangs = [ "en", "es" ];
  var greetings = {
    en: "Hello",
    es: "Hola"
  };
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };
  var logMessages = {
    en: "Logged in",
    es: "Inicio sesion"
  };
  // set the prototype
  Greetr.prototype = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    validate: function() {
      if(supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      };
    },
    greeting: function() {
      return greetings[this.language] + " " + this.firstName + "!";
    },
    formalGreeting: function() {
      return formalGreetings[this.language] + ", " + this.fullName();
    },
    greet: function(formal) {
      var msg;
      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if(console) {
        console.log(msg);
      }
      return this;
    },
    log: function() {
      if(console) {
        console.log(logMessages[this.language] + ": ", this.fullName());
      }
      return this;
    },
    setLang: function(language) {
      this.language = language;
      this.validate();
      return this;
    },
    HTMLGreeting: function(selector, formal) {
      if(!jQuery) {
        throw "jQuery not loaded";
      }
      if(!selector) {
        throw "Missing selector";
      }
      var msg;
      if(formal) {
        msg = this.formalGreeting();
      } else {
        this.greeting();
      }
      jQuery(selector).html(msg);

      return this;
    }
  };
  // initiate the object
  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
    self.validate();
  }
  // set Greetr.init prototype to Greetr.prototype
  Greetr.init.prototype = Greetr.prototype;
  // create global name space to call Greetr
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
