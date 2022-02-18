const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// Configure enzyme to work with Jest.
configure({ adapter: new Adapter() });
