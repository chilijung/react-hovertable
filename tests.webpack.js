process.env.NODE_ENV = 'production';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

var context = require.context('./test', true, /-test\.jsx?$/);
context.keys().forEach(context);

chai.use(chaiEnzyme());
