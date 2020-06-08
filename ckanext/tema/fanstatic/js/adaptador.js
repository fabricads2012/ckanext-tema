/* ***************************************************************************** */
/* ***************************************************************************** */
/* 				        ADAPTADOR				 */
/* ***************************************************************************** */
/* ***************************************************************************** */

/* ----------------------------------------------------------------------------- */
/* 			   CONSTANTES E VARIAVEIS GLOBAIS			 */
/* ----------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------- */
/* 				       CHAMADAS					 */
/* ----------------------------------------------------------------------------- */
// FORMULARIOS
jQuery(document).ready( function() {
	var elementosFormularios = jQuery('form[action]');

	if (elementosFormularios) {
		for (var indiceFormularios = 0; indiceFormularios < elementosFormularios.length; indiceFormularios++) {
			var elementoFormulario = jQuery(elementosFormularios[indiceFormularios]);
			var elementoAction = elementoFormulario.attr('action');

			if (elementoAction && elementoAction.length > 0) {
				if ( elementoAction.indexOf('/catalogo') == -1 ) {
					elementoFormulario.attr('action', '/catalogo' + elementoAction);
				}
			}
		}
	}
});

// LINKS
jQuery(document).ready( function() {
	var elementosLinks = jQuery('a[href]').not('.ui-menu-iitem, .ui-geral-a-padrao');

	if (elementosLinks) {
		for (var indiceLinks = 0; indiceLinks < elementosLinks.length; indiceLinks++) {
			var elementoLink = jQuery(elementosLinks[indiceLinks]);
			var elementoHref = elementoLink.attr('href');

			if (elementoHref && elementoHref.length > 0) {
				var $elementoParente = elementoLink.closest('section.additional-info');
				if ( elementoHref.indexOf('http://') == -1 && elementoHref.indexOf('/portal') == -1 && elementoHref.indexOf('/catalogo') == -1 ) {
					elementoLink.attr('href', '/catalogo' + elementoHref);

					console.log('/catalogo' + elementoHref);
				}
				if ( elementoHref.indexOf('_limit') > -1 ) {
					//elementoLink.attr( 'href', '/catalogo' + elementoHref.replace('limit=0', 'limit=1000') );
					//console.log(elementoHref.replace('limit=0', 'limit=1000'));
				}
				if ($elementoParente.length) {
					elementoLink.attr('href', 'http://' + elementoLink.html());
				}
			}
		}
	}
});
