$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/APIexample.feature");
formatter.feature({
  "line": 1,
  "name": "First API test",
  "description": "",
  "id": "first-api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1115907460,
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
  "duration": 2656520827,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.the_post_request_is_sent()"
});
formatter.result({
  "duration": 4203176352,
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
  "duration": 1929727531,
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
  "duration": 41910900,
  "status": "passed"
});
formatter.match({
  "location": "APIsteps.response_includes_the_following(DataTable)"
});
formatter.result({
  "duration": 113578108,
  "status": "passed"
});
formatter.after({
  "duration": 1450651,
  "status": "passed"
});
});