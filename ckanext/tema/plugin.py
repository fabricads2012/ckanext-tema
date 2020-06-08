import ckan.plugins as plugins
import ckan.plugins.toolkit as tk


class TemaPlugin(plugins.SingletonPlugin):
	plugins.implements(plugins.IConfigurer, inherit=True)

	def update_config(self, config):
		tk.add_template_directory(config, 'templates')
		tk.add_public_directory(config, 'public')
		tk.add_public_directory(config, 'public/catalogo')
		tk.add_public_directory(config, 'public/catalogo/imagens')
		tk.add_public_directory(config, 'public/catalogo/fontes')
		tk.add_resource('fanstatic', 'publico')
