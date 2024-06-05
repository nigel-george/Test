import { UserInteraction as TUserInteraction } from "../api/userInteraction/UserInteraction";

export const USERINTERACTION_TITLE_FIELD = "deviceType";

export const UserInteractionTitle = (record: TUserInteraction): string => {
  return record.deviceType?.toString() || String(record.id);
};
