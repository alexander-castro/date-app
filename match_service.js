function match(userProfile, matchProfile){
  return userProfile.score - matchProfile.score > 20;
}

function listProfileRecommendations(userProfileId) {
  if (bd.get(userProfileId) == null) { 
    return []
  }
  ids = getRecommenedProfiles(userProfileId)
  return bd.getUserByIds(ids);
}
