if (Meteor.isClient) {
  Meteor.startup(function () {

    var mainCtx = famous.core.Engine.createContext();
    mainCtx.setPerspective(1000);

    var lightbox = new famous.views.Lightbox({
      inOpacity: 1,
      outOpacity: 0,
      inTransform: famous.core.Transform.translate(0, 320, 0),
      outTransform: famous.core.Transform.translate(0, -320, 1),
      inTransition: { duration: 400, curve: famous.transitions.Easing.outBack },
      outTransition: { duration: 400, curve: famous.transitions.Easing.easeOut }
    });

    mainCtx.add(lightbox);

    var surface = new famous.core.Surface({
      content: "Hello world",
      size: [200, 200]
    });

    var scrollView = new famous.views.Scrollview();
    scrollView.addItem(surface);

    lightbox.show(scrollView);
});

}
