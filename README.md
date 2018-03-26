# xbclip
A slack slash command for sharing the latest recorded clips of any specific xbox live account

## Requirements

You'll need an API key from https://xboxapi.com. Once you've signed up for an account over there, create a `.env` file in your projects root directory and add the following:

`X-AUTH=<your api key here>`

Once that is done, run

`npm install`

In order to connect your app to your slack organization, you'll need to create a new app at https://api.slack.com/apps. The form you will fill out will ask for a URL for your application. Read below to learn how to set that up locally.

To develop locally, you'll need a way for slack to communicate with your application. I suggest using https://ngrok.com. They make it really easy to setup a localtunnel to your dev environment using HTTPS. (Which is important if you plan on publishing your app publicly)

Once you have ngrok setup, run the `.exe` and follow the instructions. Set the port to `8000`, as that is where this applications node server is set to run. Once you run the command, you'll receive a few links, one of which is an HTTPS tunnel to your local environment. Copy that, and paste it into the URL field for your new slack app. Make sure to add the following to the end of the url - `/api`.

Example - `https://21532321.ngrok.io/api`

You're all set up! Enjoy!

## Publishing Your App

I used a free heroku dyno for publishing my app. It took about 2 minutes. I followed this guide - https://hackernoon.com/deploy-a-node-js-app-in-minutes-using-heroku-898a6a54bf39
