function match(userProfile, matchProfile){
  return userProfile.score - matchProfile.score > 20;
}

function listProfileRecommendations(userProfileId){
  ids = getRecommenedProfiles(userProfileId)
  return bd.getUserByIds(ids);
}
