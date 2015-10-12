module objects {

    export class BetButton extends createjs.Bitmap {
        width: number;
        height: number;
        value: number;
        constructor(fullPath: string, x: number, y: number, width:number, height:number, value:number)        
        {
            super(fullPath);
            this.value = value;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.regX = width * .5;
            this.regY = height * .5;

            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }

        overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.7;
        }     
        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }
    }
}