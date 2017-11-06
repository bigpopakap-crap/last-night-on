# Mr. Kapil
This package helps you create the shell of a voice assistant
that works on every platform. All you need to do is tell it
your assistant's intents, API keys for various platforms, and
handle your business logic. This module will hook everything up,
manage logging, interfacing with the various assistant APIs, and
unify the interface for you

## 1. Import the package
```
const mrkapil = require('mrkapil');
```

## 2. Define your business logic
```
const Promise = require('promise');

// handlers must return Promises
function handleEverything(delegate) {
  return new Promise((resolve, reject) => {
    const responseText = buisinessLogic(); // may be async
    delegate.say(responseText);
    resolve();
  });
}
```

## 3. Define your custom intents
```
const YOUR_INTENT = new mrkapil.Intent();
```

## 4. Hook up your business logic handlers
```
// Not all handlers must be defined. But you probably should
const assistant = new mrkapil.AssistantBuilder()
  .start(delegate => handleEverything(delegate))
  .end((delegate, isCancel) => handleEverything(delegate))
  .intent(YOUR_INTENT, delegate => handleEverything(delegate))
  .fallback(delegate => handleEverything(delegate))
  .build();
```

## 5. Configure your API keys
```
const mrkapilApp = new mrkapil.AppBuilder()
  // for Mixpanel logging
  .mixpanel({
    
  })
  // for Dashbot.io logging
  .dashbot({
  
  })
  // configure the Google Assistant
  .google({
  
  })
  // configure the Amazon Alexa
  .alexa({
  
  })
  // configure Facebook Messenger
  .facebook({
  
  })
  .build(assistant);
```

## 6. Start listening
You must use `body-parser`
```
const bodyParser = require('body-parser');
mrkapilApp.use(bodyParser.json({ type: 'application/json' }));
mrkapilApp.listen(...);
```

Or mount it on an existing `express` app. You still
have to use `body-parser`
```
const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));

app.use('/namespace', mrkapilApp);

app.listen(...);

```