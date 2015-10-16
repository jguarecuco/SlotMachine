module objects {

    export class BlinkButton extends createjs.Bitmap {
        
        width: number;
        height: number;
        alphaOver: number;
        alphaOut: number;
        alphaInit: number;
        relatedButton: any;

        constructor(fullPath: string, x: number, y: number, width: number, height: number, alphaOver: number, alphaOut:number) {

            super(fullPath);

            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.regX = width * .5;
            this.regY = height * .5;
            this.alphaOver = alphaOver ? alphaOver : 1;
            this.alphaOut = alphaOut ? alphaOut : 0;
            this.alpha = alphaOut ? alphaOut : 1;
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);


        }

        overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = this.alphaOver;
        }
        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = this.alphaOut;
        }
    }
} 