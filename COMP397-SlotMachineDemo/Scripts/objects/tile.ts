module objects {

    export class Tile extends createjs.Bitmap {
        width:number;
        height: number;
        value: number;
        goal: number;
        constructor(fullPath: string, x: number, y: number, regX:number, regY:number, value:number, goal:number) {

            super(fullPath);    //Assets.getResult(pathString)  -> image with white background which is not wanted
            this.x = x;
            this.y = y;
            this.width = 69;
            this.height = 690;
            this.regX = regX ? regX : this.width * .5;
            this.regY = regY ? regY : this.height * .5;
            this.value = value ? value : 0;
            this.goal = goal ? goal : 214; // goal should be between 214 and 766(not included cause it will be set to 214) according to current canvas size, fruitsSheet size and their positions
            /*if (regX == null || regX == undefined){
                this.regX = this.width * .5;
               
            } else {
                this.regX = regX;
            }

            if (regY == null || regY == undefined) {
                this.regY = this.height * .7;
            } else {
                this.regY = regY;
            }
            
            if (value != null && value != undefined && value > 0) {
                this.value = value;
            } else {
                this.value = 0;
            }*/
        }
    }
}