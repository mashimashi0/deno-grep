import { grep } from "./grep.ts";
import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";

Deno.test({
    name: "test grep",
    fn: async () => {
        const want = [
            {
                fileName: "testdata/hoge.txt",
                line: 1,
                text: "hogeファイルです。",
            },
            {
                fileName: "testdata/hoge.txt",
                line: 3,
                text: "今日はhogeている日です。",
            },
        ];
        const got = await grep("testdata", "hoge");
        assertEquals(got, want);
    }
});