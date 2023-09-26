import { ArrayBufferConverter } from '../ArrayBufferConverter';

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  it('should load a buffer', () => {
    const buffer = new ArrayBuffer(16); 
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  it('should throw an error if trying to convert an unloaded buffer', () => {
    expect(() => {
      converter.toString();
    }).toThrow('Данные не загружены');
  });

  it('should convert a loaded buffer to a string', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = new ArrayBuffer(data.length * 2);

    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }

    converter.load(buffer);
    const jsonString = converter.toString();

    expect(jsonString).toBe(data);
  });
});
