function match(userProfile, matchProfile){
  return userProfile.score - matchProfile.score > 20;
}
