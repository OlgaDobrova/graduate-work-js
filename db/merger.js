const users = require("./dbUsers.json");
const feedback = require("./dbFeedback.json");
const repair = require("./dbRepairTypes.json");

module.exports = () => ({
  users: users.users,
  feedback1: feedback.feedback1,
  feedback2: feedback.feedback2,
  feedback3: feedback.feedback3,
  feedback4: feedback.feedback4,
  feedback5: feedback.feedback5,
  feedback6: feedback.feedback6,
  repair: repair.repairTypes,
});
