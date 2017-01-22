$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/APIexample.feature");
formatter.feature({
  "line": 1,
  "name": "First API test",
  "description": "",
  "id": "first-api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1171789608,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Random scenario",
  "description": "",
  "id": "first-api-test;random-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@api_tag"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "a POST request with body esto es el cuerpo, title esto es el titulo and userId 8 is defined",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the POST request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the response body is esto es el cuerpo, title esto es el titulo and id is 8",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the status code is 200",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "esto es el cuerpo",
      "offset": 25
    },
    {
      "val": "esto es el titulo",
      "offset": 50
    },
    {
      "val": "8",
      "offset": 79
    }
  ],
  "location": "APIsteps.a_post_request(String,String,int)"
});
formatter.result({
  "duration": 1849557777,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_post_request_is_sent()"
});
formatter.result({
  "duration": 3726675921,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "APIsteps.the_status_code_is(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1071576,
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
  "duration": 885883,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.i_fake_the_step()"
});
formatter.result({
  "duration": 999248,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.the_result_is_fake()"
});
formatter.result({
  "duration": 690959,
  "status": "passed"
});
});