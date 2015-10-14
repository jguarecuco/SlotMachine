module objects {
    export class Background extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        width: number;
        height: number;
        //CONSTRUCTOR
        constructor(fullPath: string, x: number, y: number) {
            super(fullPath);
            this.x = x;
            this.y = y;
            
            this.width = 375;
            this.height = 480;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            //this.on("mouseover", this.overButton, this);
            //this.on("mouseout", this.outButton, this);
        }

        // PRIVATE METHODS
        // Event Handler for mouse over
        /*
        overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.7;
        }

        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }*/


    }
}  