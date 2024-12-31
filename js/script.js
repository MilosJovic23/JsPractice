//

//

//

$(document).ready(function () {
	$("#sirina").keydown(function () {

		var sirinaElementa = $("#sirina").val();

		$("#element").css({
			width: sirinaElementa,
		});
	$("#visina").keydown(function () {

			var visinaElementa = $("#visina").val();
			$("#element").css({
				height: visinaElementa,
			});
		});
	$("#range").on("input", function () {

			var zaobljeniRubovi = $("#range").val();
			$("#element").css("border-radius", "" + zaobljeniRubovi + "px");
		});

	$("#color").on("input", function () {

			var boja = $(this).val();
			$("#element").css("backgroundColor", boja);
		});
	});
});
