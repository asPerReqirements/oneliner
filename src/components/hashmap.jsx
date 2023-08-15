import DB from "../assets/DB.json";

const hashMap = {};
DB.forEach(block => {
    const lowercaseQuestion = block.question.toLowerCase();
    hashMap[lowercaseQuestion] = block;
})

export default hashMap;












