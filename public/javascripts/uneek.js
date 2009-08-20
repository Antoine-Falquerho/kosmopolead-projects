/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//TREE TASK AND PROJECTS
function showChildrenProject(id){
    
    if( jQuery("#" + id + ' ul:first').css('display') == 'none' ){
        jQuery("#"+id + ' ul:first').show();
        jQuery("#"+id + ' img:first').attr('src', '/images/collapse.png')
    }
    else{
        jQuery("#" + id + ' ul:first').hide();
        jQuery("#" + id + ' img:first').attr('src', '/images/expand.png')
    }
}

function showChildrenIssue(id){
   
    if( jQuery(".tree_class_parent_" + id).css('display') == 'none' ){
        jQuery(".tree_class_parent_" + id).show();       
        jQuery("tr#"+id+' td.checkbox:first .tree_img').attr('src', '/images/collapse.png')
        jQuery("tr#"+id).addClass('active');
    }
    else{
        jQuery(".tree_class_parent_" + id).hide();
        jQuery("tr#"+id+' td.checkbox:first .tree_img').attr('src', '/images/expand.png')
        jQuery("tr#"+id).removeClass('active');
    }
}



//TOGGLE
function runEffect(effect){ 
   //get effect type from
			var selectedEffect = jQuery('#effectTypes').val();

			//most effect types need no options passed by default
			var options = {};
			//check if it's scale, transfer, or size - they need options explicitly set
			if(selectedEffect == 'scale'){  options = {percent: 0}; }
			else if(selectedEffect == 'size'){ options = { to: {width: 200,height: 60} }; }

			//run the effect
			jQuery("#"+effect).toggle(selectedEffect,options,500);
};


function initialize_toggle(toggle) {
    //set effect from select menu value
    jQuery(".toggle_"+toggle).click(function() {
        runEffect('effect_'+toggle);
        if (jQuery(".toggle_"+toggle).hasClass("open")){
           jQuery(".toggle_"+toggle).removeClass("open");
          jQuery(".toggle_"+toggle).addClass("close");
        }
        else {
           jQuery(".toggle_"+toggle).removeClass("close");
           jQuery(".toggle_"+toggle).addClass("open");
        }

        return false;
    });
    
}


function activeProjectMenu(id){
    jQuery(".projects_list li a").removeClass("active");
    jQuery("#projects_id_"+id+" a:first").addClass("active");
}

function checkTypeRelation(t){
    jQuery.ajax({dataType:'script', url:'issues/type_event', data:'type=' + t.value,type: "get", success: function(msg){eval(msg)}});
}

