

describe("pow", function() {

  it("возводится в n-ю степерь", function() {
    assert.equal(app.testPow(2, 3), 8);
    assert.equal(app.testPow(3, 4), 81);
  });

});
