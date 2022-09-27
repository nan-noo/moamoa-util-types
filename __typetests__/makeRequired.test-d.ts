import { expectType } from "tsd";
import type { MakeRequired } from "../src/makeRequired";

type ExampleObject = { a?: string; b: number };
const makeRequiredExample: MakeRequired<ExampleObject, "a"> = { a: "hi", b: 3 };

expectType<MakeRequired<ExampleObject, "a">>(makeRequiredExample);
