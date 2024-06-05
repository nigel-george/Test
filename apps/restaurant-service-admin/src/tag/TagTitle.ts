import { Tag as TTag } from "../api/tag/Tag";

export const TAG_TITLE_FIELD = "restaurantName";

export const TagTitle = (record: TTag): string => {
  return record.restaurantName?.toString() || String(record.id);
};
