function match(userProfile, matchProfile){
  return userProfile.score - matchProfile.score > 20;
}

function listProfileRecommendations(userProfile){
  ids = getRecommenedProfiles(userProfile)
  return bd.getUserByIds(ids);
}
