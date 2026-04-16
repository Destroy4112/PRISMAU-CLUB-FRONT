import { LoginApiRepository } from "../data/repository/login.api.repository";
import type { LoginRepository } from "../domain/repository/login.repository";
import { LoginUseCases } from "./use-cases/login.usecases";

const loginRepository: LoginRepository = new LoginApiRepository();
export const loginUseCases = new LoginUseCases(loginRepository);