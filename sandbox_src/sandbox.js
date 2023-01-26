import { AutoTokenizer } from "./tokenizers";
import { AutoModelForSeq2SeqLM } from "./transformers";

function log(body) {
    window.parent.postMessage({
        log: true,
        sender: 'sandbox',
        body: body
    }, "*")
}

class DummyModel {
    async load() {
        this.tokenizer = await AutoTokenizer.fromPretrained("t5-small", "models");
        this.model = await AutoModelForSeq2SeqLM.fromPretrained("t5-small", "models");
    }

    async translate(input) {
        const inputTokenIds = this.tokenizer.encode("translate English to French: " + input);
        const outputTokenIds = await this.model.generate(inputTokenIds, {maxLength:50,topK:10}, null);
        const french = this.tokenizer.decode(outputTokenIds, true);
        return french;
    }
}

const t5_model = new DummyModel();
const loading_promise = t5_model.load();

window.addEventListener('message', async function (event) {
    await loading_promise;
    const input = event.data.body;
    const out = await t5_model.translate(input);

    log(out);
});
