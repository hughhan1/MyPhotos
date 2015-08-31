$(function(){
	$(".typed-skills").typed({
		strings: [
			"std::cout << <q>Hello, C++!</q> << std::endl;", 
			"System.out.println(<q>Hello, Java!</q>);",
			"console.log(<q>Hello, JavaScript!</q>);",
			"echo <q>Hello, PHP!</q>;",
			"print <q>Hello, Python!</q>"
		],
		typeSpeed: 30,
		loop: true,
	});
});