import { LoginApiRepository } from "../data/login.api.repository";
import type { LoginRepository } from "../domain/login.repository";
import { LoginUseCases } from "./login.usecases";

const loginRepository: LoginRepository = new LoginApiRepository();

export const loginUseCases = new LoginUseCases(loginRepository);