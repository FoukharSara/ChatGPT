"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = void 0;
const mongoose_1 = require("mongoose");
// Schema
const resPromptSchema = new mongoose_1.Schema({
    prompt: { type: String, required: true },
    response: { type: String, required: true }
});
// Model
const resPrompt = (0, mongoose_1.model)('PromptResponse', resPromptSchema);
function saveData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newData = {
                prompt: 'What is your favorite color?',
                response: 'My favorite color is blue.'
            };
            const result = yield resPrompt.create(newData);
            console.log('Data saved successfully:', result);
        }
        catch (error) {
            console.error('Error saving data:', error);
        }
    });
}
exports.saveData = saveData;
saveData();
exports.default = resPrompt;
//# sourceMappingURL=response.js.map