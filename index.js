/* eslint-disable  func-names */

/* eslint quote-props: ["error", "consistent"]*/


'use strict';
const Alexa = require('alexa-sdk');


//============================================================

//TODO: The items below this comment need your attention.

//============================================================
const APP_ID = undefined;



const SKILL_NAME = 'fearless leaders';

const GET_S_MESSAGE = 'Shane once said: ';

const GET_D_MESSAGE = 'Danielle once said: ';

const HELP_MESSAGE = 'You can say tell me a name, or, you can say exit... What can I help you with? ';

const HELP_REPROMPT = 'What can I help you with? ';

const STOP_MESSAGE = 'Catch you on the flip side! ';

const ENTRY_MESSAGE = 'Hi friends. Who would you like a quote from? ';

const ENTRY_REPROMPT = 'Who would you like to hear? ';

const REPROMPT = '   Would you like to pick again? ';



//=============================================================
//TODO: Replace this data with your own. 
//=============================================================
const shanedata = [

    ' I\'ve seen the future, and it is awesome. ',
 
    ' mass mutual? I don\'t do, insurance. ',

    ' So I\'m going to ask you a very technical question, who did you hang out with in high school? ',

    ' your passion is contagious. ',

    ' I hate john mayer. ',

    ' I have a special type of respect for someone who wears doc martins. ',

];


const danidata = [

    ' dass beautiful. ',

    ' I\'m here, I\'m queer. ',

    ' I\'m a little hippie who doesn\'t eat meat. ',

    ' you do not need a ten year plan, anyone who says you do, is lying. ',

    ' you have to remain authentic. ',

    ' my first concert was Marilyn Manson, so if that doesn\'t tell you who I am, I don\'t know what does. ',

    ' do the thing. ',

    ' live your best life. ',

];

//==============================================================

//Editing anything below this line might break your skill.

//==============================================================

const handlers = {

    'LaunchRequest': function() {

        const speechOutput = ENTRY_MESSAGE;

        const reprompt = ENTRY_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);

        this.emit(':responseReady');

    },

    'GetShaneQuote': function () {

        const factArr = shanedata;

        const factIndex = Math.floor(Math.random() * factArr.length);

        const randomFact = factArr[factIndex];

        const speechOutput = GET_S_MESSAGE + randomFact + REPROMPT;


        this.response.cardRenderer(SKILL_NAME, randomFact);

        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

    'GetDanielleQuote': function () {

        const factArr = danidata;

        const factIndex = Math.floor(Math.random() * factArr.length);

        const randomFact = factArr[factIndex];

        const speechOutput = GET_D_MESSAGE + randomFact + REPROMPT;


        this.response.cardRenderer(SKILL_NAME, randomFact);

        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

    'AMAZON.HelpIntent': function () {

        const speechOutput = HELP_MESSAGE;

        const reprompt = HELP_REPROMPT;


        this.response.speak(speechOutput).listen(reprompt);

        this.emit(':responseReady');

    },

    'AMAZON.CancelIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },
    'AMAZON.StopIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },

};



exports.handler = function (event, context, callback) {

    const alexa = Alexa.handler(event, context, callback);

    alexa.APP_ID = APP_ID;

    alexa.registerHandlers(handlers);

    alexa.execute();

};
