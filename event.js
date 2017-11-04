  AFRAME.registerComponent('explode', {
    schema: {
      color: {default: 'red'},
      preset: {default: 'default'},
      particleCount: {default: 1000},
    },
    init: function () {
      var data = this.data;
      var el = this.el;
      el.addEventListener('mouseenter', function () {
        console.log('enter');
        el.children[0].setAttribute('particle-system', 'maxParticleCount', 100);
      });
      el.addEventListener('mouseleave', function () {
        console.log('exit');
        el.children[0].setAttribute('particle-system', 'maxParticleCount', 0);
      });
    }
  });
