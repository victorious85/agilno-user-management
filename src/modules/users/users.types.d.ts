/* eslint-disable no-undef */

declare global {
  namespace User {
    interface Model {
      id: number;
      name: string;
      username: string;
      email: string;
      address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
          lat: string;
          lng: string;
        };
      };
      phone: string;
      website: string;
      company: {
        name: string;
        catchPhrase: string;
        bs: string;
      };
    }

    interface Details {
      id: string;
      name: string;
      email: string;
      role: string;
      company?: string;
    }
  }
}

export {};
