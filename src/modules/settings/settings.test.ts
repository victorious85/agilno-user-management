// Utils
import { getTreeWithProviders } from '../../utils';
// Components
import { Settings } from './index';

describe('Settings Screen', () => {
  test('renders correctly', () => {
    const component = getTreeWithProviders(Settings);
    expect(component).toMatchSnapshot();
  });
});
