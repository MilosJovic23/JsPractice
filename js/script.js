//

//

//

$(document).ready(function () {
	$("#sirina").keydown(function () {
		console.log("test");

		var sirinaElementa = $("#sirina").val();

		$("#element").css({
			width: sirinaElementa,
		});
		$("#visina").keydown(function () {
			console.log("test");
			var visinaElementa = $("#visina").val();
			$("#element").css({
				height: visinaElementa,
			});
		});
		$("#range").on("input", function () {
			console.log("Test");
			var zaobljeniRubovi = $("#range").val();
			$("#element").css("border-radius", "" + zaobljeniRubovi + "px");
		});

		$("#color").on("input", function () {
			console.log("test");
			var boja = $(this).val();
			$("#element").css("backgroundColor", boja);
		});
	});
});
