import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  value1 = '';
  value2='';
  public matrix1:Number[]=[];
  public matrix2:Number[]=[];
  public matrix3:Number[]=[];

  handleAdd=()=>{
      var l1 = this.value1.split('#')
      var l2 = this.value2.split('#')
      var x = parseInt(l1[0])
      var y = parseInt(l2[0])
      let x1=parseInt(l1[2])
      let y1=parseInt(l2[2])
      for (let i = 0; i < x*x; i++) {
          this.matrix1.push(i+x1)
      }

      for (let j = 0; j < y*y; j++) {
        this.matrix2.push(j+y1)
      }

      let j = 0;
      let k = 0;

      if(x==y)
      {
        while (j!=x*x && k!=y*y) {
          let var1 = this.matrix1[j];
          let var2 = this.matrix2[k];
          this.matrix3.push(Number(var1)*Number(var2));
          j=j+1;
          k=k+1;
        }
      }



  }

  isDone=(value : any)=>{
    var l1 = this.value1.split('#')
    var x = parseInt(l1[0])
    var y = parseInt(l1[2])
    if((value-x+(x-y))%x==x-1)
    {
      return false;
    }
    return true;
  }

  isDone2=(value : any)=>{
    var l1 = this.value2.split('#')
    var x = parseInt(l1[0])
    var y = parseInt(l1[2])
    if((value-x+(x-y))%x==x-1)
    {
      return false;
    }
    return true;
  }

  isDone3=(value3 : any , index : any)=>{
    var l1 = this.value2.split('#')
    var x = parseInt(l1[0])
    var y = parseInt(l1[2])
    var l = this.matrix1[index];
    if((Number(value3)/Number(l)-x+(x-y))%x==x-1)
    {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

}
