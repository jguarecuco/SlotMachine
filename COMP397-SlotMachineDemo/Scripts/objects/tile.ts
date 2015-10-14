module objects {

    export class Tile extends createjs.Bitmap {
        width:number;
        height: number;

        constructor(fullPath: string, x: number, y: number, regX:number, regY:number) {

            super(fullPath);
            this.x = x;
            this.y = y;


            this.width = 69;
            this.height = 690;

            if (regX == null || regX == undefined){
                this.regX = this.width * .5;
               
            } else {
                this.regX = regX;
            }

            if (regY == null || regY == undefined) {
                this.regY = this.height * .7;
            } else {
                this.regY = regY;
            }
            
        }
    }
}