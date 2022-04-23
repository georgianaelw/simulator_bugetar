const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });

});

function checkboxlimit(checkgroup, limit){
	var checkgroup=checkgroup
	var limit=limit
	for (var i=0; i<checkgroup.length; i++){
		checkgroup[i].onclick=function(){
		var checkedcount=0
		for (var i=0; i<checkgroup.length; i++)
			checkedcount+=(checkgroup[i].checked)? 1 : 0
		if (checkedcount>limit){
			alert("Puteți selecta doar "+limit+" opțiuni")
			this.checked=false
			}
		}
	}
}
//Syntax: checkboxlimit(checkbox_reference, limit)
checkboxlimit(document.forms.formular.optiune, 2)


