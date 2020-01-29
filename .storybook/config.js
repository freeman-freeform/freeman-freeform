import { configure, addDecorator, addParameters } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/html';
import { initDsm } from '@invisionapp/dsm-storybook';


addParameters({
  backgrounds: [{ name: 'DSM background', value: '#f8f8fa', default: true }, { name: 'dark', value: '#333' }]
});

addParameters({ docs: { page: null } });
addDecorator(withA11y);
addDecorator(centered);

//Init Dsm
initDsm({
  addDecorator,
  addParameters,
  callback: () => {
    // apply the custom options
    // setCustomOptions();
    configure(require.context('../stories', true, /\.stories\.js$/), module);
  }
});