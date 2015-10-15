module objects {

    export class Tile extends createjs.Bitmap {
        width:number;
        height: number;
        value: number;
        goal: number;

        hasBegun: boolean = false;
        hasEnded: boolean = false;
        constructor(fullPath: string, x: number, y: number, regX: number, regY: number, value: number, goal: number, hasBegun:boolean, hasEnded:boolean) {

            super(fullPath);    //Assets.getResult(pathString)  -> image with white background which is not wanted
            this.x = x;
            this.y = y;
            this.width = 69;
            this.height = 759;
            this.regX = regX ? regX : this.width * .5;
            this.regY = regY ? regY : this.height * .5;
            this.value = value ? value : 0;
            this.goal = goal ? goal : 186; // goal should be between 214 and 766(not included cause it will be set to 214) according to current canvas size, fruitsSheet size and their positions
            this.hasBegun = hasBegun ? hasBegun : false;
            this.hasEnded = hasEnded ? hasEnded : false;
        }
    }
}