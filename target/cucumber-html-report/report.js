$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/APIexample.feature");
formatter.feature({
  "line": 1,
  "name": "First API test",
  "description": "",
  "id": "first-api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1086281063,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Random scenario",
  "description": "",
  "id": "first-api-test;random-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "b",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "c",
  "keyword": "Then "
});
formatter.match({
  "location": "APIsteps.a()"
});
formatter.result({
  "duration": 265776884,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.b()"
});
formatter.result({
  "duration": 60530,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.c()"
});
formatter.result({
  "duration": 54374,
  "status": "passed"
});
formatter.after({
  "duration": 1366528,
  "status": "passed"
});
formatter.uri("features/dummy_example.feature");
formatter.feature({
  "line": 1,
  "name": "Descripcion feature",
  "description": "",
  "id": "descripcion-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 585289,
  "status": "passed"
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
  "duration": 7423058,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.i_fake_the_step()"
});
formatter.result({
  "duration": 2160591,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.the_result_is_fake()"
});
formatter.result({
  "duration": 70789,
  "status": "passed"
});
formatter.after({
  "duration": 639149,
  "status": "passed"
});
});