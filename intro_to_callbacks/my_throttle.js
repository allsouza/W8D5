Function.prototype.myThrottle = function(interval){
    let tooSoon = false;
    return () => {
        if (tooSoon === false){
        tooSoon = true;
        setTimeout(function(){
            tooSoon = false;
            // console.log("test")
        }, interval);
        this();
    }
}
}

class Neuron {
    constructor() {
      this.fire = this.fire.myThrottle(500);
    }
  
    fire() {
      console.log("Firing!");
    }
  }

  const neuron = new Neuron();
  const interval = setInterval(() => {
    neuron.fire();
  }, 10);