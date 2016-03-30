describe("the application Homepage", function(){
  it("should have an h1 tag", function(){
    browser.ignoreSynchronization = true;
    var text = "Virtual Yard Sale";
    browser.get('/');

    expect(element(by.css(".jumbotron h1")).getText()).toEqual(text);
  });

  // it("should display paragraph when you click 'paragraph'", function(){
  //   var paragraphText = "I could sure use a drink right now.";
  //   element(by.id("paragraph-link")).click();

  //   expect(element(by.className('selected-item')).getText()).toEqual(paragraphText);
  // });

  // it("should display dogs list when you click 'list'", function(){
  //   var dogs = "Bernese\nHusky\nGoldendoodle";

  //   expect(element(by.className('selected-item')).getText()).not.toEqual(dogs);

  //   element(by.id("dog-list-link")).click();

  //   expect(element(by.className('selected-item')).getText()).toEqual(dogs);
  // });
});
