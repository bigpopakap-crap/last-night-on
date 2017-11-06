const mrkapil = require('./mrkapil');

const handlers = require('./assistant-handlers.js');

const WELCOME_INTENT = new mrkapil.Intent('welcome');
const IS_IT_ON_INTENT = new mrkapil.Intent('isiton');
const FALLBACK_INTENT = new mrkapil.Intent('uknown');
const BYE_INTENT = new mrkapil.Intent('goodbye');
const CANCEL_INTENT = new mrkapil.Intent('cancel');

function build() {
  const assistant = new mrkapil.AssistantBuilder()
    .start(delegate => handlers.welcome(delegate))
    .end((delegate, isCancel) => handlers.goodbye(delegate, isCancel))
    .intent(WELCOME_INTENT, delegate => handlers.welcome(delegate))
    .intent(IS_IT_ON_INTENT, delegate => handlers.isItOn(delegate))
    .intent(FALLBACK_INTENT, delegate => handlers.fallback(delegate))
    .intent(BYE_INTENT, delegate => handlers.goodbye(delegate, false))
    .intent(CANCEL_INTENT, delegate => handlers.goodbye(delegate, true))
    .fallback(delegate => handlers.fallback(delegate))
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
