// Utils
import { getShallowComponent } from '../../utils/test-helper.utils';
// Components
import { UserDetails } from './index';

const TEST_PROPS = {
  route: {
    params: {
      user: {
        id: '1',
        name: 'test',
        email: 'test@gmail.com',
        role: 'test',
      },
    },
  },
};

describe('User Details Screen', () => {
  test('renders correctly', () => {
    const component = getShallowComponent(UserDetails, { ...TEST_PROPS });
    expect(component).toMatchSnapshot();
  });
});
