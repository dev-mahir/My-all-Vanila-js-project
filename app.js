// Age calculator 
 
const ageCal_form = document.getElementById('ageCal-form');
const show_age = document.getElementById('age-result');

ageCal_form.addEventListener('submit',function(e){
    e.preventDefault();

    let day = this.querySelector('select[name=birthdate]').value;
    let month = this.querySelector('select[name=birthmonth]').value;
    let year = this.querySelector('select[name=birthyear]').value;


    // get current date 
    let date = new Date();

    let c_day = date.getDate();  
    let c_month = date.getMonth();   // 0-11
    let c_year = date.getFullYear(); 
    
    let b_date,b_month,b_year;
    

    let cm;
    check_month(c_month);
    function check_month (month){
        switch (month) {
            case 0:
                cm = 31; 
                break;
            case 1:
                cm = 28; 
                break;
            case 2:
                cm = 30; 
                break;
            case 3:
                cm = 31; 
                break;
            case 4:
                cm = 30; 
                break;
            case 5:
                cm = 31; 
                break;
        
            case 6:
                cm = 30; 
                break;
        
            case 7:
                cm = 31; 
                break;
        
            case 8:
                cm = 31; 
                break;
        
            case 9:
                cm = 30; 
                break;
        
            case 10:
                cm = 31; 
                break;
        
            case 11:
                cm = 30; 
                break;
        
            case 12:
                cm = 31; 
                break;
        
            default:
                break;
        }
    }


    if( c_day < day ){
        b_date = ( cm + c_day ) - day;    
    }else{
        b_date =  c_day  - day;
    }

    if ( c_month < month ){
        b_month = ( 12 + c_month + 1 ) - month;
    }else{
        b_month = (c_month + 1)  - month;
    }

    if(c_month < month ){
        b_year = (c_year - 1) - year;
    }else{
        b_year = c_year  - year;
    }







    show_age.innerHTML = `<p class="show_result">  ${b_year} years ${b_month}  months ${b_date} </p>`;

});