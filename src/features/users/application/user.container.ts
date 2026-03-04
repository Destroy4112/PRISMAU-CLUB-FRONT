import { UserApiRepository } from "../data/user.api.repository";
import type { UserRepository } from "../domain/user.repository";
import { UserUseCases } from "./user.usecases";

const userRepository: UserRepository = new UserApiRepository();

export const userUseCases = new UserUseCases(userRepository);