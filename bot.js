var irc = require('irc');
var config = require('config');
var client = new irc.Client(config.get('irc.server'), config.get('irc.nickname'), {
    channels: config.get('irc.channellist'),
});