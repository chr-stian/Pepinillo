$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/feat_example.feature");
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
  "location": "PruebaSteps.I_have_cukes_in_my_belly(int)"
});
formatter.result({
  "duration": 372934947,
  "status": "passed"
});
formatter.match({
  "location": "PruebaSteps.i_fake_the_step()"
});
formatter.result({
  "duration": 4685006048,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c202\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:470)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:632)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:121)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:129)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat prototipo.pepinillo.PruebaSteps.i_fake_the_step(PruebaSteps.java:21)\r\n\tat ✽.When I fake the step(features/feat_example.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PruebaSteps.the_result_is_fake()"
});
formatter.result({
  "status": "skipped"
});
});