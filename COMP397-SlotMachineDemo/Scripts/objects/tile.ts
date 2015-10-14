module objects {

    export class Tile extends createjs.Bitmap {
        width:number;
        height: number;
        value: number;

        constructor(fullPath: string, x: number, y: number, regX:number, regY:number, value:number) {

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
            
            if (value != null && value != undefined && value > 0) {
                this.value = value;
            } else {
                this.value = 0;
            }
        }
    }
}