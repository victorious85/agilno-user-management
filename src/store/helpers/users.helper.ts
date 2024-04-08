const roles = [
  'Developer',
  'Designer',
  'Manager',
  'Tester',
  'Analyst',
  'Architect',
  'Administrator',
  'Engineer',
  'Artist',
  'Coordinator',
];

export const formatFetchedData = (data: User.Model[]): User.Details[] => {
  if (!data?.length) {
    return [];
  }
  return data?.map((item, index) => ({
    id: item?.id?.toString(),
    name: item?.name,
    email: item?.email,
    role: roles[index] || roles[0],
    company: item?.company.name,
  }));
};
