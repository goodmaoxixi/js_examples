/** Created on Mon Apr 1, 2019 */

 var execute_cmd = function(cmd) {
     if (cmd == "draw_bar_plot")
       console.log("Draw the bar plot, please");
     else if (cmd == "update_page")
       console.log("Update the page, please");
     else
       console.log("Erro: Not recognized command: " + cmd);
 };
 
execute_cmd("draw_bar_plot");
execute_cmd("update_page");
execute_cmd("blablabla");
