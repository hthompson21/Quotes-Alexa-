/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//===========================================================================
//TODO: The items below this comment need your attention.
//===========================================================================
const SKILL_NAME = 'shane quote';
const OPEN_MESSAGE = 'Hello brother';
const GET_S_MESSAGE = 'Shane once said:';
const GET_D_MESSAGE = 'Danielle once said:';
const HELP_MESSAGE = 'You can say tell me a shane quote, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Catch you on the flip side!';

//===========================================================================
//TODO: Replace this data with your own.  
//===========================================================================
const shanedata = [
    'Ive seen the future and it is awesome', 
    'mass mutual? i dont do insurance',
    'its important that theres someone in your life who you dont want to let down',
    'i worked at the white house',
    'your passion is contagious',
    'i hate john mayer',
];

 const danidata = [
     'das beautiful',
     'im here, im queer',
     'im a little hippie who doesnt eat meat',
     'you do not need a ten year plan, anyone whos says you do is lying',
     'you have to remain authentic',
     'dope',
     'my first concert was Marilyn Manson so if that doesnt tell you who i am I dont know what does',
     'do the thing',
     'live your best life'
];


//==========================================================================
//This is the stuff I always break
//==========================================================================
const handlers = {
    'LaunchRequest': function() {
    this.emit();
    },
    'GetShaneQuote': function () {
        const factArr = shanedata;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_S_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);  
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'GetDanielleQuote': function () {
        const factArr = danidata;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_D_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
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
