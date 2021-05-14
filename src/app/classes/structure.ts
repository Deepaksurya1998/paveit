

export class structure{

  outerstack:string;
  children:[
    {
      innerstack:string;
      children:[
         {
           servicename:string;
           children:[
             {
               innerservicename:string;
               startbutton:string;
               stopbutton:string;
               details:string;
               id:number;
             }
           ]
         }
      ]
    }
  ]
}
