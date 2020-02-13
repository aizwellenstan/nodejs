const kafka = require('kafka-node')

const consumer = new kafka.ConsumerGroupStream({
  kafkaHost: '192.168.1.185:9092',
  groupId: 'group1',
  fromOffset: 'latest'
}, 'test17')

consumer.on('data', message => {
  console.log(message.value)
  // var bytes = message
  // var text_decoder = new TextDecoder("utf-8");
  // var str = text_decoder.decode(Uint8Array.from(bytes).buffer);
  // console.log(str);
})

// var bytes = [227, 129, 130, 227, 129, 132, 227, 129, 134, 227, 129, 136, 227, 129, 138];
// var text_decoder = new TextDecoder("utf-8");
// var str = text_decoder.decode(Uint8Array.from(bytes).buffer);
// console.log(str);