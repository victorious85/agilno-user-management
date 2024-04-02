/* eslint-disable no-undef */

declare global {
  namespace User {
    interface Details {
      id: string;
      name: string;
      email: string;
      role: string;
    }
  }
}

export {};
