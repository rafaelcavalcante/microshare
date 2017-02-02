(function(namespace, $) {
  var el = document;
  if(typeof $ !== 'undefined') {
    el = $(document);
  } else {
    Object.prototype.on = addEventListener;
  }

  var MicroShare = function() {
    var ms = this;
    this.shareMap = {
      facebook: 'https://www.facebook.com/sharer/sharer.php?u={{url}}',
      twitter: 'https://twitter.com/home?status={{url}}',
      gplus: 'https://plus.google.com/share?url={{url}}',
      linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&source={{url}}'
    };
    el.on('click', function(event) {
      if(event.target.getAttribute('data-microshare')) {
        share.call(ms, event);
      }
    });

    this.addShare = function(name, link) {
      this.shareMap[name] = link;
    }

    function share(e) {
      e.preventDefault();
      var shareScheme = "";
      var target = e.target;
      var shareInfo = {
        service: target.getAttribute('data-microshare').toLowerCase(),
        title: target.getAttribute('data-microshare-title') || document.title,
        url: target.getAttribute('data-microshare-url') || document.URL
      };
      shareScheme = setScheme.call(this, shareInfo);
      window.open(shareScheme,'_blank','height=400, width=800');
    }

    function setScheme(shareInfo) {
      var scheme = this.shareMap[shareInfo.service];
      var regex = new RegExp("{{(\\w+)}}", 'gmi');
      if(scheme === undefined) { throw 'Scheme not defined'; }
      scheme = scheme.replace(regex, function(match, string) {
        return shareInfo[string];
      });
      return scheme;
    };
  };

  namespace.MicroShare = new MicroShare();
})(window, window.jQuery || window.Zepto);
