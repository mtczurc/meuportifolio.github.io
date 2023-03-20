jQuery(document).ready(function() {			
	
	/*Informe a URL do sistema*/		
	//var URL = 'http://192.168.0.241/PROJETOSWEB/sigesaude/';				

	App.init();

	/*INICIO - AJAX ALERTAS HEADER */
	$.ajax({
		method: "get",
		url: "index.php?r=alerta/TotalAgendamento",					
		beforeSend: function(){						
			$(".load").css({display:"block"});
		},
		complete: function(){						
			$(".load").css({display:"none"});
		},
		success: function(retorno){
			$(".totalNotificacaoAjax").html(retorno);
		}
	 });

	$('.pegaTodasNotificacaoAjax').click(function(){

		$.ajax({
			method: "get",
			url: "index.php?r=alerta/TotalAgendamentoPessoa",					
			beforeSend: function(){						
				//$(".load").css({display:"block"});
			},
			complete: function(){						
				//$(".load").css({display:"none"});
			},
			success: function(retorno){
				$(".totalAgendamentoPessoaAjax").html(retorno);
			}
		});

		$.ajax({
			method: "get",
			url: "index.php?r=alerta/TotalAgendamentoProfissional",					
			beforeSend: function(){						
				//$(".load").css({display:"block"});
			},
			complete: function(){						
				//$(".load").css({display:"none"});
			},
			success: function(retorno){
				$(".totalAgendamentoProfissionalAjax").html(retorno);
			}
		});

	});
	/*FIM - AJAX ALERTAS HEADER */
	
	/*INICIO - JANELA MODAL PARA ALTERA VINCULO HEADER */
	/*Monta o dropDownList na janela Modal*/
	$('.unidade-vinculada-text').click(function(){

		$.ajax({
			method: "get",
			url: "index.php?r=vinculo/retornaVinculo",					
			beforeSend: function(){						
				$(".load").css({display:"block"});
			},
			complete: function(){						
				$(".load").css({display:"none"});
			},
			success: function(retorno){
				$(".lista-de-vinculos").html(retorno);
			}
		});
		
	});

	/*Modal Alterar Vinculo*/
	$('.btn-salva-vinculo').click(function(){

		var id_vinculo = $("#id-vinculo-sessao").val();

		$.ajax({
			type: "POST",
			url: "index.php?r=vinculo/atualizaVinculo",
			data: {id_vinculo: $("#id-vinculo-sessao").val()},
			dataType: "html",
			beforeSend: function(){
			        	//$("#descricao-veiculo").find("p").remove();
			},
			success: function(retorno){
			    $('#myModal1').removeClass('in');
				$('.modal-backdrop').remove();
				$('.nome-unidade-vinculo').html(retorno);
				location.reload();				
			}
		});
	});
	/*FIM - JANELA MODAL PARA ALTERA VINCULO HEADER */
	
});