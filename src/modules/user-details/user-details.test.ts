// Utils
import { getTreeWithProviders } from '../../utils';
// Components
import { UserDetails } from './index';

const TEST_PROPS = {
  route: {
    params: {
      userId: '1',
    },
  },
};

describe('User Details Screen', () => {
  test('renders correctly', () => {
    const component = getTreeWithProviders(UserDetails, { ...TEST_PROPS });
    expect(component).toMatchSnapshot();
  });
});
