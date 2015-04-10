var expect = chai.expect;

describe("FrameRouter", function() {
  var iframe;

  beforeEach(function() {
    iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    iframe.src = '/debug.html';
  });

  it("does some shit", function() {
    expect(1).to.equal(1);
  });
});
