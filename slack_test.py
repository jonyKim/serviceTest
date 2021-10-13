import json
import requests

slack_token = "xoxb-2590717009862-2610068650913-YkfL76EWtBmCzdDPaY8RNGAY"
channel_id = "D02HMKFLW84"

#https://app.slack.com/client/T02HCM309RC/D02HMKFLW84

message = "Slack Notification Test for Result of test case"

data = {'Content-Type': 'application/x-www-form-urlencoded',
        'token': slack_token,
        'channel': channel_id, 
        'text': message
        }

URL = "https://slack.com/api/chat.postMessage"
res = requests.post(URL, data=data)