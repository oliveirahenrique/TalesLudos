class Scene {

    constructor(name, element) {
        this.name = name;
        this.element = element;
        this.challengeNumber = 0;
        this.challenge = new Array();
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getElement(){
        return this.element;
    }

    set setElement(element){
        this.element = element;
    }

    get getChallengeNumber(){
        return this.challengeNumber;
    }

    set setChallengeNumber(challengeNumber){
        this.challengeNumber = challengeNumber;
    }

    get getChallenge(){
        return this.challenge;
    }

    set setChallenge(challenge){
        this.challenge = challenge;
    }

    get getNextChallengeNumber(){
        this.challengeNumber++;
        return this.challengeNumber;
    }

    getChallengeByID(id){
        return this.challenge[id];
    }
}
