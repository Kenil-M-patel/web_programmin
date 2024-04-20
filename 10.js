var today = new Date(); 
            var date = today.getDate(); 
            var month = today.getMonth() + 1; 
            var year = today.getFullYear(); 
            
            var formattedDate = (date < 10 ? '0' : '') + date + '-' + (month < 10 ? '0' : '') + month + '-' + year;
            
        
            console.log("Today's Date: " + formattedDate);