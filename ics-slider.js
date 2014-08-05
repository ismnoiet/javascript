// this plugin works just with pages with the same structure as ics-slider.html

var begin = 1;
var end  = 5;
var total = 0;
$('#current .item').each(function(){total++;});

	 
	for(i=end+1;i<total;i++){
         $("#"+i).appendTo("#next");
         	}


$("#up").click(function(){
   	   		   // first get the class of the last element of the 5-elements list
			   begin = $("#first").attr('title');


			   // change the last element
			   end = end +1;


			   
			   //verify if the end exists 
			   // status = $("."+end).attr('class');
			   status = $("#"+end).attr('class');


			    if(status == 'undefined'){
	           	 end = end-1;
	             // in this case we don't have enough elemtns to slide between 
	             // so we stay in the same list  
	             alert('END OF THE ROAD ');
	           }else{

		               // move the  the old beginning item to the previous box with removing  #first from it  
		               first = $("#first").clone();
		                
		               first.attr('id',begin);
		               first.removeAttr('title');
		               $("#first").remove();
		               first.appendTo("#previous");
		                
			          			
			            // make the begin point to the next element with the index [begin +1]
			            // and grab 1 element from the next box
			            
			            // 1 here is the step that we want to take so we want to step by 1 element	
			            
			           	begin =  Number(begin)+1;  
			            second = $("#"+begin).clone();
			            id = second.attr('id');
			            second.attr('id','first');
			            second.attr('title',id);
			            $("#"+begin).remove();
			            current_box_content = $("#current").html();
			            $("#current").html('');
			            second.appendTo("#current");
			            $("#current").append(current_box_content);

			           	
			           	$("#"+end).appendTo("#current");


		                // take the first element from the next box and put it in the end of the current box
		                // make call to concat2 function

						   // $("#current").append(concat2());
                
	           }
   	
       });


$("#down").click(function(){
              total_previous = 0;
              // count the number of previous elements that we have in the previous box
              $("#previous > .item").each(function(){total_previous++});
              
              // verify if the previous box is empty then display the error that says "the search is done there is no more previous item"
              if(total_previous == 0)
              {
               alert('END OF THE ROAD ');
              }else{

                // move the last element of the current box and put it in the top of the next box
                // change the element with id="first" to id="title value" then remove the title value
                
                 
                // add id="first" to the first element and remove the id="first" from the old one
                // move the last element of the current box and put it at the top of the next box
                


                // store the content of the next box in a temporary variable "next_box_content"
                next_box_content = $("#next").html();
                // clear the content of the next box
                $("#next").html('');
                // move the last element of the current box and put it in the
                $("#"+end).appendTo("#next");

                // put the old next box content which is stored in the next_box_content at the end of the next box
                $("#next").append(next_box_content);
                // move the index value which is stored in the title attribute and put it in the id attribute
                $("div[title="+begin+"]").attr('id',begin);
                // remove the title attribute cause we don't need it any more
                $("#"+begin).removeAttr('title');

                // store the content of the current box in the a temporary variable "current_box_content"
                current_box_content = $("#current").html();
                // clear the content of the current box
                $("#current").html('');
                // move the last element from the previous box which will be the first item in the current box
               $("#"+(begin-1)).appendTo($("#current"));
               // put the index value in the title of the new current box first element
               $("#"+(begin-1)).attr('title',(begin-1));
               // change it's id to id="first"
               $("div[title="+(begin-1)+"]").attr('id','first');
                // now we are sure that our current box contains just the new first element so we can append the "current_box_content" variable to the end of current box
                $("#current").append(current_box_content);
 
               // decriment the beginig and end by 1
               begin = Number(begin)-1;
               end = Number(end)-1;
              }

});
