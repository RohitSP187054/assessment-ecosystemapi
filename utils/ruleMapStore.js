// This is our temporary in-memory "database"
let ruleMap = {
  "EcoWorldBuy": ["LanguageKonnect", "TalentKonnect"],
  "LanguageKonnect": ["TalentKonnect"],
  "TheTop36": ["EcoWorldBuy", "LanguageKonnect", "TalentKonnect"]
};

// We use module.exports to share the ruleMap variable with other files
module.exports = {
  ruleMap
};