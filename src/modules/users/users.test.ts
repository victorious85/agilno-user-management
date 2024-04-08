// Utils
import { getTreeWithProviders } from '../../utils';
// Components
import { Users } from './index';

describe('Users Screen', () => {
  test('renders correctly', () => {
    const component = getTreeWithProviders(Users);
    expect(component).toMatchSnapshot();
  });
});
