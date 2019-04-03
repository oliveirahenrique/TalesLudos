class Jorney {

    constructor(name){
        this.name = name;
        this.sceneNumber = 0;
        this.scene = new Array();
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getSceneNumber(){
        return this.sceneNumber;
    }

    set setSceneNumber(sceneNumber){
        this.sceneNumber = sceneNumber;
    }

    get getScene(){
        return this.scene;
    }

    set setScene(scene){
        this.scene = scene;
    }

    get getNextSceneNumber(){
        this.sceneNumber++;
        return this.sceneNumber;
    }

    getSceneByName(name){
        for(var i = 0; i < this.scene.length; i++){
            if(this.scene[i].getName == name){
                return this.scene[i];
            }
        }
        return null;
    }

    deleteSceneByName(name){
        for(var i = 0; i < this.scene.length; i++){
            if(this.scene[i].getName == name){
                this.scene.splice(i, 1);
                return true;
            }
        }
        return false;
    }

}