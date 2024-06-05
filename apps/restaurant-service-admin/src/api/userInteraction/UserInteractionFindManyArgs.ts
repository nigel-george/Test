import { UserInteractionWhereInput } from "./UserInteractionWhereInput";
import { UserInteractionOrderByInput } from "./UserInteractionOrderByInput";

export type UserInteractionFindManyArgs = {
  where?: UserInteractionWhereInput;
  orderBy?: Array<UserInteractionOrderByInput>;
  skip?: number;
  take?: number;
};
