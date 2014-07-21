if (Meteor.isClient) {
  Meteor.startup(function () {

    var Engine = require("famous/core/Engine");
    var Lightbox = require("famous/views/Lightbox");
    var Transform = require("famous/core/Transform");
    var Easing = require("famous/transitions/Easing");
    var Surface = require("famous/core/Surface");
    var Scrollview = require("famous/views/Scrollview");

    var mainCtx = Engine.createContext();
    mainCtx.setPerspective(1000);

    var lightbox = new famous.views.Lightbox({
      inOpacity: 1,
      outOpacity: 0,
      inTransform: Transform.translate(0, 320, 0),
      outTransform: Transform.translate(0, -320, 1),
      inTransition: { duration: 400, curve: Easing.outBack },
      outTransition: { duration: 400, curve: Easing.easeOut }
    });

    mainCtx.add(lightbox);

    var surface = new Surface({
      content: "Hello world",
      size: [200, 200]
    });

    var scrollView = new Scrollview();
    scrollView.sequenceFrom([surface]);

    lightbox.show(scrollView);
});

}
