var FrameRouter = window.frameRouter;

var router = new FrameRouter({
  index: {
    model: function(params) {
      debugger;
    },

    setup: function() {
    }
  },

  showPost: {
    model: function(params) {
      debugger;
    },

    setup: function() {
    }
  },

  showPosts: {
    model: function(params) {
      debugger;
    },

    setup: function() {
    }
  }
});

router.map(function(match) {
  match('/').to('index', function(match) {
    match('/posts').to('showPosts');
    match('/posts/:id').to('showPost');
  });
});

router.listen();
