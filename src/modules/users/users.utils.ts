// 🔸 Target: Filter Users Data by Search
import { FieldType } from '../user-details/components/form/form.constants.ts';

export const getFilteredUsersData = (
  data: User.Details[],
  searchBy: FieldType,
  search: string,
) => {
  const searchKey = search?.toLowerCase();
  return data?.filter(item =>
    item[searchBy]?.toLowerCase().includes(searchKey),
  );
};
