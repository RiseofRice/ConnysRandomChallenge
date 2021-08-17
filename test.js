const tmi = require('tmi.js');

const client = new tmi.Client({
    options: {debug: true},
    identity: {
        username: 'ichmagmilchreisbot',
        password: "1r2j3t4kz2zefhfj3zvfjj8s9n1wym"
    },
    channels: ["ava_zone"]
});

client.connect();

client.on('message', (channel, tags, message, context, self) =>{
    if(self) return;
    
    // if tags['display-name'] == ""

    if (message.toLowerCase() === "!hamster") {
        client.say(channel, `@ava_zone, how dare you!`);
    }
    if (message.toLowerCase() === "!slots") {
        client.say(channel, "immer diese Süchtigen hilfe gibts auf BZGA.de");
    }
    
    console.log(`${tags['display-name']}: ${message}`)
})
