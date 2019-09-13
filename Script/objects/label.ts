module objects{  // Module == Namespace
export class Label extends createjs.Text{// export == public
    //Variables
    //COnstructors
    constructor(labelString:string, fontSize:string,fontFamily:string, fontColor:string,x:number=0,y:number=0,isCentered:boolean=false){
        super(labelString,fontSize+" "+fontFamily,fontColor);

        //Set the registration point if true to be in the middle
        if (isCentered){
            this.regX=this.getMeasuredWidth()*0.5;
            this.regY=this.getMeasuredHeight()*0.5;
        }

        //set initial position
        this.x=x;
        this.y=y;
    }

    //Method
}
}