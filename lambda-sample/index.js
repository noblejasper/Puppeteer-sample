const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-northeast-1" });

const SAVE_BUCKET_NAME = process.env["SAVE_BUCKET_NAME"];

function processEvent(event, context, callback) {
  // TODO handle the event here
  return "Hello from Lambda!" + SAVE_BUCKET_NAME;
}

exports.handler = (event, context, callback) => {
  return processEvent(event, context, callback);
};
