/* Write a function called count_votes that takes a list of numbers
indicating votes for candidates 0, 1, or 2 and returns a new list of length
3 showing how many counts each candidate got for example:
votes = [1, 0, 1, 1, 2, 0]
result = count_votes(votes)
print(result) # [2, 3, 1]
*/

votes = [1, 0, 1, 1, 2, 0];

function countVotes(votes) {
  let arr = [0, 0, 0];
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] == 0) {
      arr[0] += 1;
    } else if (votes[i] == 1) {
      arr[1] += 1;
    } else if (votes[i] == 2) {
      arr[2] += 1;
    }
  }
  return arr;
}
countVotes(votes);

/*
    def count_votes(votelist):
    """
    This function is aiming to check how many vote for candidate 0, 1 and 2 by creating a list of each candidate
    with a vote of 0 at first. Which in 0,1 and 2 is also the index in the list, this allow me to loop through the vote
    list and find the match vote to the candiate index number in order to add the vote count to the correct index location
    """
    candidate_vote = [0,0,0]

    for vote in range(len(votelist)):
        if votelist[vote] == 0:
            candidate_vote[0]+=1
        elif votelist[vote] == 1:
            candidate_vote[1] +=1
        else:
            candidate_vote[2] +=1

    return candidate_vote
*/