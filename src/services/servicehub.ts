import { CountService } from "./count.service";
import { UserService } from "./user.service";

export class RootService {
    countService = new CountService(this);
    userService = new UserService(this);
}
