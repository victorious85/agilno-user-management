import { Linking } from 'react-native';
// Utils
import { openURL, transformEmail } from './link.utils';

/* ====================================
 *              🔰 LINK UTILS
 ==================================== */

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
}));

/**
 * 🔸 [openURL]
 */
describe('[link utils] ⚛ openURL()', () => {
  const LINK = 'https://www.google.com/';

  afterEach(() => {
    // clear mock function calls
    jest.clearAllMocks();
  });

  it('should throw error when url is null/undefined', async () => {
    try {
      await openURL(null);
    } catch (error) {
      expect(error).toEqual(new Error('Wrong url null'));
    }

    try {
      await openURL(undefined);
    } catch (error) {
      expect(error).toEqual(new Error('Wrong url undefined'));
    }

    expect(Linking.openURL).toHaveBeenCalledTimes(0);
  });

  it('should throw error when link is not opened', async () => {
    (Linking.openURL as jest.Mock).mockImplementation((param: string) =>
      Promise.reject(param),
    );

    try {
      const RESULT = await openURL(LINK);

      expect(RESULT).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Failed to open ${LINK}`);
    }

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith(LINK);
  });

  it('should open the provided link', async () => {
    (Linking.openURL as jest.Mock).mockImplementation((param: string) =>
      Promise.resolve(param),
    );

    const RESULT = await openURL(LINK);

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith(LINK);
    expect(RESULT).toBe(LINK);
  });
});

/**
 * 🔸 [transformEmail]
 */
describe('[link utils] ⚛ transformEmail()', () => {
  it('should return "null" if value is falsy', () => {
    expect(transformEmail(null)).toBeNull();
    expect(transformEmail(undefined)).toBeNull();
    expect(transformEmail('')).toBeNull();
  });

  it('should transform email', () => {
    const VALUE = 'test@test.com';
    const EXPECTED_VALUE = 'mailto:test@test.com';

    expect(transformEmail(VALUE)).toBe(EXPECTED_VALUE);
  });
});
