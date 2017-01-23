$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/APIexample.feature");
formatter.feature({
  "line": 1,
  "name": "First API test",
  "description": "",
  "id": "first-api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 983666809,
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
  "line": 6,
  "name": "a POST request with body esto es el cuerpo, title esto es el titulo and userId 8 is defined",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the POST request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the response\u0027s body is esto es el cuerpo, title is esto es el titulo and userId is 8",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the status code is 201",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "title",
        "esto es el titulo"
      ],
      "line": 11
    },
    {
      "cells": [
        "body",
        "esto es el cuerpo"
      ],
      "line": 12
    },
    {
      "cells": [
        "userId",
        "8"
      ],
      "line": 13
    },
    {
      "cells": [
        "id",
        "101"
      ],
      "line": 14
    }
  ],
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
  "duration": 1811622260,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_post_request_is_sent()"
});
formatter.result({
  "duration": 3294163633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "esto es el cuerpo",
      "offset": 23
    },
    {
      "val": "esto es el titulo",
      "offset": 51
    },
    {
      "val": "8",
      "offset": 83
    }
  ],
  "location": "APIsteps.the_responses_bod_is(String,String,int)"
});
formatter.result({
  "duration": 1649997999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 19
    }
  ],
  "location": "APIsteps.the_status_code_is(int)"
});
formatter.result({
  "duration": 38310491,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 121542002,
  "status": "passed"
});
formatter.after({
  "duration": 938206,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "time measuring",
  "description": "",
  "id": "first-api-test;time-measuring",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "a POST request with body esto es el cuerpo, title esto es el titulo and userId 8 is defined",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the POST request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the response time is less than 800 ms",
  "keyword": "Then "
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
  "duration": 38263298,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_post_request_is_sent()"
});
formatter.result({
  "duration": 412705838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800",
      "offset": 31
    }
  ],
  "location": "APIsteps.the_response_time_is_less_than_ms(Long)"
});
formatter.result({
  "duration": 65694914,
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
  "duration": 3537892,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.i_fake_the_step()"
});
formatter.result({
  "duration": 850489,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.the_result_is_fake()"
});
formatter.result({
  "duration": 901272,
  "status": "passed"
});
});