const mrkapil = require('./mrkapil');

const handlers = require('./assistant-handlers.js');

const WELCOME_INTENT = new mrkapil.Intent('welcome');
const IS_IT_ON_INTENT = new mrkapil.Intent('isiton');
const FALLBACK_INTENT = new mrkapil.Intent('uknown');
const BYE_INTENT = new mrkapil.Intent('goodbye');
const CANCEL_INTENT = new mrkapil.Intent('cancel');

function build() {
  const assistant = new mrkapil.AssistantBuilder()
    .start(inputData => handlers.welcome(inputData))
    .end((inputData, isCancel) => handlers.goodbye(inputData, isCancel))
    .intent(WELCOME_INTENT, inputData => handlers.welcome(inputData))
    .intent(IS_IT_ON_INTENT, inputData => handlers.isItOn(inputData))
    .intent(FALLBACK_INTENT, inputData => handlers.fallback(inputData))
    .intent(BYE_INTENT, inputData => handlers.goodbye(inputData, false))
    .intent(CANCEL_INTENT, inputData => handlers.goodbye(inputData, true))
    .fallback(inputData => handlers.fallback(inputData))
  .build();

  const app = new mrkapil.AppBuilder()
    .mixpanel({

    })
    .dashbot({

    })
    .google({
      mountAt: '/google',
      shouldUseDialogFlow: true,
      shouldAllowDebug: true
    })
    .alexa({

    })
    .facebook({

    })
    .debugAt('/debug')
  .build(assistant);

  return app;
}

module.exports = {
  build
};
