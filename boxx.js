class boxx{
constructor(x,i,j,k)
  {this.x=x
   this.i=i
  this.j=j
  this.k=k
   this.th = k
  }

  show()
  {
   
 translate(this.i,this.j,this.k) 
    ///rotateX(this.k/200)
    push();
 box(this.x,this.x,this.x) 
  console.log("boz created")
    
  
   
    pop();
    
  }
trans()
  { this.k=this.k+10
  }


retz()
  {
  return this.k;
  }
del()
  {
    if (this.k>1500)
    {
  return this.k
 
    }
    }


}
