const { send } = require("process");
const axios = require('axios');
const qs = require('qs');


require("dotenv").config();

console.log("SLACK_TOKEN  :", process.env.SLACK_TOKEN);
console.log("SLACK_CHANNEL:", process.env.SLACK_CHANNEL);

const URL = "https://slack.com/api/chat.postMessage";

const slackToken = "";
const channelId = "";

async function sendMessage(message) {
    let response = {
        result : false,
        message : ''
    }

    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    let data = {
        'token': process.env.SLACK_TOKEN,
        'channel': process.env.SLACK_CHANNEL, 
        'text': message
    };

    let options = {
        method: 'POST',
        headers : headers,
        data: qs.stringify(data),
        url: URL,
    }

    try {
        let res = await axios(options);
        if(res.status == 200) {
            response.result = true;
            response.message = 'Success';
        }
    } catch (e) {
        response.message = e;
    }

    return response;
}

(async function () {
    console.log('Testing slack message for testing..');

    let message = "Slack Notification Test for Result of test case (JS)";
    await sendMessage(message);
} ());