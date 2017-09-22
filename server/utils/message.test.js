var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Carry';
    var latitude = 12.2342321;
    var longitude = -34.2133242;
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage).toInclude({from});
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(locationMessage.createdAt).toBeA('number');
  });
});
