class FORM{
    constructor()
    {
        
    }
    
    
   display()
   {
       var title=createElement("h3")
       title.html("CAR RACE!")
       title.position(250,50)
       var inp= createInput("ENTER YOUR NAME")
       inp.position(250,250)
       var button=createButton("GO")
       button.position(250,270)
       button.mousePressed(function(){
           inp.hide()
           button.hide()
           var name=inp.value()
         playercount++
         p.writeCount(playercount)
         p.updateName(name)
         var greeting =createElement("h5")
         greeting.html(" HOLD ON "+ name) 
         greeting.position(250,200)
       })
   } 
    
    }