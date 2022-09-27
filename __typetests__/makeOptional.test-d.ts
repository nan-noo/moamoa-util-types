import { expectType } from "tsd";
import type { MakeOptional } from "../src/makeOptional";

type ExampleObject = { a: string; b: number };
const makeOptionalExample: MakeOptional<ExampleObject, "a"> = { b: 3 };

expectType<MakeOptional<ExampleObject, "a">>(makeOptionalExample);
