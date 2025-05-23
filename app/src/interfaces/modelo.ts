import { Imprimivel } from "../utils/imprimivel";
import { comparavel } from "./comparavel";

export interface modelo<T> extends comparavel<T>, Imprimivel {}
