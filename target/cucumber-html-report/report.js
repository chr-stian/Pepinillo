$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/dummy_example.feature");
formatter.feature({
  "line": 1,
  "name": "Descripcion feature",
  "description": "",
  "id": "descripcion-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Descripcion escenario",
  "description": "",
  "id": "descripcion-feature;descripcion-escenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have 3 cukes in my belly",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I fake the step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the result is fake",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 7
    }
  ],
  "location": "DummySteps.i_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 395652451,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.i_fake_the_step()"
});
formatter.result({
  "duration": 216983,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.the_result_is_fake()"
});
formatter.result({
  "duration": 959237,
  "status": "passed"
});
});