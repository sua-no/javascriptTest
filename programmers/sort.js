function solution() {
    var answer = '';
    const participant = ["leo", "kiki", "eden"];
    const completion = ["eden", "kiki"];

    participant.sort();
    completion.sort();
    for(var i =0; i<completion.length;i++){
        if(participant[i] == completion[i]){
            delete participant[i];
            console.log(participant);
        }
    }
    
    answer = participant[0];
    console.log(answer);
    return answer;
}
