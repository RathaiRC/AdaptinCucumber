$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Uaser login the Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;uaser-login-the-adactin-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Username In The Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The Password In The Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click The Login Button And It Navigates To Search Hotel Webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 34562131900,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8G0SA38\u0027, ip: \u0027192.168.225.80\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Launch_The_Adactin_Application(Stepdefinition.java:18)\r\n\tat ✽.Given user Launch The Adactin Application(Adactin.feature:5)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Launch_The_Adactin_Application(Stepdefinition.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:40)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:80)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:71)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:229)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:197)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:211)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:191)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:137)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 83 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Username_In_The_Username_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Password_In_The_Password_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "User Search The Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user Select The Location In The Location Field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Select The Hotel In Select The Hotel Field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select The Room Type In Select The Room Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select The Number Of Room In Select The Number Of Room Field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Enter The Date_In Date In The Date_In Field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Enter The Date_Out Date In The Date_Out Field",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Number Of Adults In The Number Of Adults Field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Number Of Childrens In The Number Of Childrens Field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Click The Submit Button And It Navigate To Select Hotel Webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Location_In_The_Location_Field()"
});
formatter.result({
  "duration": 4111171900,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8G0SA38\u0027, ip: \u0027192.168.225.80\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Select_The_Location_In_The_Location_Field(Stepdefinition.java:45)\r\n\tat ✽.When user Select The Location In The Location Field(Adactin.feature:13)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Select_The_Location_In_The_Location_Field(Stepdefinition.java:45)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:40)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:80)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:71)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:229)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:197)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:211)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:191)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:137)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 86 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Hotel_In_Select_The_Hotel_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Room_Type_In_Select_The_Room_Type_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Number_Of_Room_In_Select_The_Number_Of_Room_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Date_In_Date_In_The_Date_In_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Date_Out_Date_In_The_Date_Out_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Number_Of_Adults_In_The_Number_Of_Adults_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Number_Of_Childrens_In_The_Number_Of_Childrens_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Submit_Button_And_It_Navigate_To_Select_Hotel_Webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "User Select The Hotel In The Select Hotel WebPage",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-the-select-hotel-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user Click The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Confirm To Continue And It Navigates To Book Hotel Webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Select_Button()"
});
formatter.result({
  "duration": 4105521600,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8G0SA38\u0027, ip: \u0027192.168.225.80\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Click_The_Select_Button(Stepdefinition.java:115)\r\n\tat ✽.When user Click The Select Button(Adactin.feature:25)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Click_The_Select_Button(Stepdefinition.java:115)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:40)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:80)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:71)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:229)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:197)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:211)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:191)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:137)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 86 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.user_Confirm_To_Continue_And_It_Navigates_To_Book_Hotel_Webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "User Book The Hotel From Webpage",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-the-hotel-from-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user Enter The First Name In The First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Enter The Last Name In The Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter The Billing Address In The Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter The Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter The Credit Card Type In The Credit Card Type Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Card Expiry Date In The Card Expiry Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Click The Book Now Button And It Navigates To Booking Confirmation Webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_First_Name_In_The_First_Name_Field()"
});
formatter.result({
  "duration": 4096373600,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8G0SA38\u0027, ip: \u0027192.168.225.80\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Enter_The_First_Name_In_The_First_Name_Field(Stepdefinition.java:130)\r\n\tat ✽.When user Enter The First Name In The First Name Field(Adactin.feature:29)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Enter_The_First_Name_In_The_First_Name_Field(Stepdefinition.java:130)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:40)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:80)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:71)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:229)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:197)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:211)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:191)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:137)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 86 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Last_Name_In_The_Last_Name_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Billing_Address_In_The_Billing_Address_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Card_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Credit_Card_Type_In_The_Credit_Card_Type_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Card_Expiry_Date_In_The_Card_Expiry_Date_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation_Webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 38,
  "name": "User Logout From The Adactin Webpage",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-logout-from-the-adactin-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user Logout From The Adactin Application",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Logout_From_The_Adactin_Application()"
});
formatter.result({
  "duration": 4072943500,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8G0SA38\u0027, ip: \u0027192.168.225.80\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Logout_From_The_Adactin_Application(Stepdefinition.java:187)\r\n\tat ✽.Then user Logout From The Adactin Application(Adactin.feature:41)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:42071\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.Stepdefinition.user_Logout_From_The_Adactin_Application(Stepdefinition.java:187)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.vintage.engine.execution.RunnerExecutor.execute(RunnerExecutor.java:40)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.accept(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Iterator.forEachRemaining(Unknown Source)\r\n\tat java.util.Spliterators$IteratorSpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEach(Unknown Source)\r\n\tat org.junit.vintage.engine.VintageTestEngine.executeAllChildren(VintageTestEngine.java:80)\r\n\tat org.junit.vintage.engine.VintageTestEngine.execute(VintageTestEngine.java:71)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:229)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.lambda$execute$6(DefaultLauncher.java:197)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.withInterceptedStreams(DefaultLauncher.java:211)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:191)\r\n\tat org.junit.platform.launcher.core.DefaultLauncher.execute(DefaultLauncher.java:137)\r\n\tat org.eclipse.jdt.internal.junit5.runner.JUnit5TestReference.run(JUnit5TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 86 more\r\n",
  "status": "failed"
});
});