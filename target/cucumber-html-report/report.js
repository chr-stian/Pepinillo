$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/APIexample.feature");
formatter.feature({
  "line": 1,
  "name": "First API test",
  "description": "",
  "id": "first-api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 975821584,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "post request with table scenario",
  "description": "",
  "id": "first-api-test;post-request-with-table-scenario",
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
      "line": 12
    },
    {
      "cells": [
        "body",
        "esto es el cuerpo"
      ],
      "line": 13
    },
    {
      "cells": [
        "userId",
        "8"
      ],
      "line": 14
    },
    {
      "cells": [
        "id",
        "101"
      ],
      "line": 15
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
  "duration": 1795274193,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_post_request_is_sent()"
});
formatter.result({
  "duration": 4134322937,
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
  "duration": 1492911905,
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
  "duration": 35666177,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 174518561,
  "status": "passed"
});
formatter.after({
  "duration": 1789721,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "time measuring",
  "description": "",
  "id": "first-api-test;time-measuring",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "a POST request with body esto es el cuerpo, title esto es el titulo and userId 8 is defined",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the POST request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the response time is less than 8000 ms",
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
  "duration": 19133445,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_post_request_is_sent()"
});
formatter.result({
  "duration": 545427312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8000",
      "offset": 31
    }
  ],
  "location": "APIsteps.the_response_time_is_less_than_ms(Long)"
});
formatter.result({
  "duration": 83294605,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "get request with scenario outline",
  "description": "",
  "id": "first-api-test;get-request-with-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "a GET request with id \u003cid\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the GET request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the email is \u003cemail\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "first-api-test;get-request-with-scenario-outline;",
  "rows": [
    {
      "cells": [
        "id",
        "email"
      ],
      "line": 29,
      "id": "first-api-test;get-request-with-scenario-outline;;1"
    },
    {
      "cells": [
        "1",
        "Eliseo@gardner.biz"
      ],
      "line": 30,
      "id": "first-api-test;get-request-with-scenario-outline;;2"
    },
    {
      "cells": [
        "2",
        "Jayne_Kuhic@sydney.com"
      ],
      "line": 31,
      "id": "first-api-test;get-request-with-scenario-outline;;3"
    },
    {
      "cells": [
        "3",
        "Nikita@garfield.biz"
      ],
      "line": 32,
      "id": "first-api-test;get-request-with-scenario-outline;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "get request with scenario outline",
  "description": "",
  "id": "first-api-test;get-request-with-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "a GET request with id 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the GET request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the email is Eliseo@gardner.biz",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "APIsteps.a_GET_request_with_id_id(int)"
});
formatter.result({
  "duration": 43128221,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_GET_request_is_sent()"
});
formatter.result({
  "duration": 204766844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eliseo@gardner.biz",
      "offset": 13
    }
  ],
  "location": "APIsteps.the_email_is_email(String)"
});
formatter.result({
  "duration": 97885267,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "get request with scenario outline",
  "description": "",
  "id": "first-api-test;get-request-with-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "a GET request with id 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the GET request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the email is Jayne_Kuhic@sydney.com",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "APIsteps.a_GET_request_with_id_id(int)"
});
formatter.result({
  "duration": 29749685,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_GET_request_is_sent()"
});
formatter.result({
  "duration": 207466044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jayne_Kuhic@sydney.com",
      "offset": 13
    }
  ],
  "location": "APIsteps.the_email_is_email(String)"
});
formatter.result({
  "duration": 40833746,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "get request with scenario outline",
  "description": "",
  "id": "first-api-test;get-request-with-scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "a GET request with id 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the GET request is sent",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the email is Nikita@garfield.biz",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "APIsteps.a_GET_request_with_id_id(int)"
});
formatter.result({
  "duration": 1755865,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_GET_request_is_sent()"
});
formatter.result({
  "duration": 169749562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nikita@garfield.biz",
      "offset": 13
    }
  ],
  "location": "APIsteps.the_email_is_email(String)"
});
formatter.result({
  "duration": 31857442,
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
  "duration": 3226012,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.i_fake_the_step()"
});
formatter.result({
  "duration": 385746,
  "status": "passed"
});
formatter.match({
  "location": "DummySteps.the_result_is_fake()"
});
formatter.result({
  "duration": 391389,
  "status": "passed"
});
});