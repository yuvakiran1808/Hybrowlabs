function CountOccurence( sname )
{

  for( let i = 0 ;i < sname.length ;i++)
  {
    //lets declare a variable to keep the count of the current letter
    let count = 0;
    for( let j = 0 ;j < sname.length ;j++)
    {
      if(sname[j]==" ") continue;    //skipping the whitespace 
        
      if(sname[i] == sname[j] && i > j) break;
      
      if(sname[i] == sname[j]) count++;     // here we are counting the occurrence Of each letter
      
    }
    if( count > 0)
    console.log(`${sname[i].toUpperCase()} - ${count}`);//printing the output
     
  }
 
}
//Reading the String or input string
let stringname = "YUVA SAI KIRAN";
let Lname = stringname.toLowerCase();
CountOccurence(Lname);
