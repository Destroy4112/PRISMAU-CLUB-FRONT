import { UserPasswordApiRepository } from "../data/repositories/user-password.api.repository";
import type { UserPasswordRepository } from "../domain/repositories/user-password.repository";
import { UserPasswordUseCases } from "./use-cases/user-password.usecases";

const userPasswordRepository: UserPasswordRepository = new UserPasswordApiRepository();
export const userPasswordUseCases = new UserPasswordUseCases(userPasswordRepository);